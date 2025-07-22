import {Locator ,Page,expect} from "@playwright/test";
export default class PlaywrightWrapper{
    constructor(private page : Page){}
    async goto(url:string){
        await this.page.goto(url,{
            waitUntil:"domcontentloaded",
        });
    }

async waitAndClick(locator:string | Locator){
const element = typeof locator === "string" ? this.page.locator(locator) : locator;
await element.waitFor({state: "visible"});
await element.click();
}

async navigate(link:string | Locator){
    const element = typeof link === "string" ? this.page.locator(link) : link;
    await Promise.all([
        this.page.waitForNavigation({waitUntil:"load"}),
    ]);
}


async click(locator: string | Locator) {
    await this.waitAndClick(locator);
  }

  async type(locator: string | Locator, value: string) {
    const element = typeof locator === "string" ? this.page.locator(locator) : locator;
    await element.waitFor({ state: "visible" });
    await element.fill(value);
  }

  async check(locator: string | Locator) {
    const element = typeof locator === "string" ? this.page.locator(locator) : locator;
    await element.waitFor({ state: "visible" });
    if (!(await element.isChecked())) {
      await element.check();
    }
  }

  async getText(locator: string | Locator): Promise<string> {
    const element = typeof locator === "string" ? this.page.locator(locator) : locator;
    await element.waitFor({ state: "visible" });
    const text = await element.textContent();
    return text?.trim() || "";
  }

  async waitForVisibility(locator: string | Locator) {
    const element = typeof locator === "string" ? this.page.locator(locator) : locator;
    await element.waitFor({ state: "visible" });
  }
  async fill(selector: string, value: string) {
        await this.page.waitForSelector(selector);
        await this.page.fill(selector, value);
    }

  async waitforsometime(time: number){
        await this.page.waitForTimeout(time);   
    }

  async waitUntilClickable(locator: string | Locator, maxRetries = 5, delay = 500) {
    const element = typeof locator === "string" ? this.page.locator(locator) : locator;

    await element.waitFor({ state: 'visible' });

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            await expect(element).toBeEnabled({ timeout: delay });
            await element.click();
            return; 
        } catch (error) {
            if (attempt === maxRetries) {
                throw new Error(`Element not clickable after ${maxRetries} attempts: ${error}`);
            }
            await this.page.waitForTimeout(delay);
        }
    }
  }

      async isVisible(locator: string | Locator): Promise<boolean> {
        const element = typeof locator === "string" ? this.page.locator(locator) : locator;
        try {
            await element.waitFor({ state: "visible", timeout: 5000 });
            return true;
        } catch (e) {
            return false;
        }
    }

    async selectOption(locator: string | Locator, options: { label?: string, value?: string, index?: number }) {
        const element = typeof locator === "string" ? this.page.locator(locator) : locator;
        await element.waitFor({ state: "visible" });
        await element.selectOption(options);
    }

    async hover(locator: string | Locator) {
        const element = typeof locator === "string" ? this.page.locator(locator) : locator;
        await element.waitFor({ state: "visible" });
        await element.hover();
    }

    async scrollIntoViewIfNeeded(locator: string | Locator) {
        const element = typeof locator === "string" ? this.page.locator(locator) : locator;
        await element.scrollIntoViewIfNeeded();
    }

    async count(locator: string | Locator): Promise<number> {
        const element = typeof locator === "string" ? this.page.locator(locator) : locator;
        return await element.count();
    }

    async all(locator: string | Locator): Promise<Locator[]> {
        const element = typeof locator === "string" ? this.page.locator(locator) : locator;
        return await element.all();
    }



        async textContent(locator: string | Locator): Promise<string> {
        try {
            const element = typeof locator === "string" ? this.page.locator(locator) : locator;
            await element.waitFor({ state: "attached", timeout: 10000 });
            const text = await element.textContent();
            return text?.trim() || "";
        } catch (error) {
            console.error(`Error getting text content for locator: ${locator}`, error);
            return "";
        }
    }

  async select(locator: Locator | string, value: string): Promise<void> {
        if (typeof locator === 'string') {
            await this.page.locator(locator).selectOption({ label: value });
        } else {
            await locator.selectOption({ label: value });
        }
  }  
}
