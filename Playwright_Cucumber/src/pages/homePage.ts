import {expect,Page,Locator} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import http from "http";
import https from "https";
import { URL } from "url";

export default class HomePage {
    private base: PlaywrightWrapper;
    validlinkCount: number = 0;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private HomePageElements = {
        allLinks: "//*[contains(@class,'nav-item')]//a", //retrive all link in the home page
        blk1Shopnow: "#entry_217964 a:first-of-type",
        mpowBanner: "#entry_217967",
        productTitle: "//*[@id='entry_216816']/h1",
        headphonesBanner: "#entry_217976",
        headPhones: "//*[@id='entry_216816']/h1",
        nextButton: "a.carousel-control-next[href='#mz-carousel-217960']",
        activeBanner: "div.carousel-item.active img",
        trendingProduct: "//a[.//img[@alt='Laptops']]",
        trendingMac: "img[alt='Macs']:first-of-type, img[alt='iMac']:first-of-type",
        trendingProductParagraph: "//div[@id='entry_212395']/div/p",
        trendingProductTitle: "//div[@id='entry_216816']/h1"
    }

    async block1click() {
        return await this.base.waitAndClick(this.HomePageElements.blk1Shopnow);
    }
    async isscrolledToTop(): Promise<void> {
        await this.page.evaluate(() => window.scrollTo(0, 0));
        const scrollPosition = await this.page.evaluate(() => window.scrollY);
        expect(scrollPosition).toBe(0);
    }

    async block2click() {
        return this.base.waitAndClick(this.HomePageElements.mpowBanner);
    }

    async isProductPage(string: string) {
        const productTitle = await this.page.locator(this.HomePageElements.productTitle).textContent();
        expect(productTitle).toContain(string);
    }

    async clickheadphonesBanner() {
        return this.base.waitAndClick(this.HomePageElements.headphonesBanner);
    }

    async clickTrendingProduct() {
        const trendingElement = this.page.locator(this.HomePageElements.trendingMac).first();
        await trendingElement.click();
    }

    async trendMacDescription() {
        let retrivedtext: string = await this.base.getText(this.HomePageElements.trendingProductTitle);
        // const productDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque. Facilisis leo vel fringilla est ullamcorper. Tellus id interdum velit laoreet id donec ultrices tincidunt. Vitae nunc sed velit dignissim sodales. Mi proin sed libero enim sed. Mi quis hendrerit dolor magna eget est lorem ipsum.";
        const producttitle='iMac';
        expect(retrivedtext).toBe(producttitle);
    }

    async getAllLinks(): Promise<string[]> {
        const links: Locator = this.page.locator(this.HomePageElements.allLinks);
        const allLinks: string[] = [];
        for (let i = 0; i < await links.count(); i++) {
            const link = await links.nth(i).getAttribute('href');
            if (link) {
                allLinks.push(link);
            }
        }
        return allLinks;
    }

    async checkLink(link: string): Promise<void> {
        try {
            const urlObj = new URL(link);
            const protocol = urlObj.protocol === "https:" ? https : http;

            await new Promise<void>((resolve) => {
                const req = protocol.request(
                    {
                        method: "HEAD",
                        host: urlObj.hostname,
                        path: urlObj.pathname + urlObj.search,
                        port: urlObj.port || (urlObj.protocol === "https:" ? 443 : 80),
                        timeout: 5000,
                    },
                    (res) => {
                        if (res.statusCode === 200) {
                            console.log(`${link} - ${res.statusMessage}`);
                            this.validlinkCount++;
                        } else {
                            console.log(`${link} - ${res.statusMessage} - is a broken link`);
                        }
                        resolve();
                    }
                );
                req.on("error", () => {
                    console.log(`${link} - is a broken link`);
                    resolve();
                });
                req.on("timeout", () => {
                    req.destroy();
                    console.log(`${link} - is a broken link (timeout)`);
                    resolve();
                });
                req.end();
            });
        } catch (e) {
            console.log(`${link} - is a broken link`);
        }
    }
}