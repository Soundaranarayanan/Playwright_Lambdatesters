import { Locator, Page } from "@playwright/test";

export default class SearchPage {
  constructor(private page: Page) {}

  private SearchPageElements = {
    // Search functionality elements
    searchbox: "(//input[@placeholder='Search' or @name='search'])[1]",
    searchbutton: "//button[contains(text(),'Search')]",
    productResult: "//div[contains(@class,'product-layout') or contains(@class,'product-thumb')]",
    noProductMessage: "//p[contains(text(),'no product that matches') or contains(text(),'no results')]",
    macbookProduct: "   ",
    iphoneProduct: "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'iphone')]",
    imacProduct: "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'imac')]",

    // Price range elements
    mindragger: "(//div[@class='d-flex align-items-center']/descendant::input[@class='form-control' and @placeholder='Minimum Price'])[2]",
    maxdragger: "(//div[@class='d-flex align-items-center']/descendant::input[@class='form-control' and @placeholder='Maximum Price'])[2]",
    allProductPrices: "//span[@class='price-new']",

    // Category elements
    shopbycategory: "//div[@id='entry_217832']/descendant::a",
    components: "(//li[@class='nav-item']//following-sibling::a[@class='icon-left both nav-link']/div/span)[1]",

    // Product count elements
    showCountDropdown: "//select[@id='input-limit']",
    productList: "//div[@data-grid='product-layout product-grid no-desc col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6']/div[@class='product-layout product-grid no-desc col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6']",

    // Quick view elements
    firstProduct: "(//div[@class='carousel-item active']//img)[1]",
    textQuickView: "(//div[@class='entry-col col-12 col-lg-6 order-1 flex-column']/div)[1]/h1",

    // Add to cart elements
    addToCartButton: "(//div[@class='product-action']/button/i)[1]",
    popupMessage: "//div[@class='toast-body']//p",
    checkoutButton: "//a[@class='btn btn-secondary btn-block' and contains(text(),'Checkout')]",
    textShoppingCart: "//div[@class='col-md-12']//h1"
  };

  async navigateToHomepage(url: string) {
    await this.page.goto(url);
  }

  async enterSearchTerm(term: string) {
    await this.page.locator(this.SearchPageElements.searchbox).fill(term);
  }

  async clickSearchButton() {
    await this.page.locator(this.SearchPageElements.searchbutton).click();
  }


async isProductDisplayed(productName: string): Promise<boolean> {
  try {
    const firstProductTitle = this.page.locator("div.product-layout >> h4.title >> a").first();
    await firstProductTitle.waitFor({ state: 'visible', timeout: 5000 });

    const titleText = await firstProductTitle.textContent();
    return titleText?.trim().toLowerCase().includes(productName.toLowerCase()) ?? false;
  } catch (error) {
    console.error("Error checking product display:", error);
    return false;
  }
}


async isNoProductMessageDisplayed(): Promise<boolean> {
  try {
    const locator = this.page.locator('text=There is no product that matches the search criteria');
    await locator.waitFor({ state: 'visible', timeout: 5000 }); // wait until it's visible
    return await locator.isVisible();
  } catch (e) {
    console.error("No product message not visible:", e);
    return false;
  }
}

  async getNoProductMessage(): Promise<string> {
    return await this.page.locator(this.SearchPageElements.noProductMessage).textContent() || "";
  }

  async clickShopByCategory() {
    await this.page.locator(this.SearchPageElements.shopbycategory).click();
  }

  async selectCategory() {
    await this.page.locator(this.SearchPageElements.components).click();
  }

  async enterMinimumValue(min: string) {
    await this.page.locator(this.SearchPageElements.mindragger).fill(min);
  }

  async enterMaximumValue(max: string) {
    await this.page.locator(this.SearchPageElements.maxdragger).fill(max);
  }

//   async verifyPriceRange(min: number, max: number): Promise<boolean> {
//     const prices = await this.page.locator(this.SearchPageElements.allProductPrices).all();
//     for (const priceElement of prices) {
//       const priceText = await priceElement.textContent();
//       const price = parseFloat(priceText?.replace(/[^0-9.]/g, '') || 0);
//       if (price < min || price > max) {
//         return false;
//       }
//     }
//     return true;
//   }



async verifyPriceRange(min: number, max: number): Promise<boolean> {
  const pricesLocator = this.page.locator(this.SearchPageElements.allProductPrices);
  const count = await pricesLocator.count();

  for (let i = 0; i < count; i++) {
    const priceText = await pricesLocator.nth(i).textContent();
    const price = parseFloat(priceText?.replace(/[^0-9.]/g, '') || '0');

    if (price < min || price > max) {
      console.log(`Price ${price} is out of range (${min} - ${max})`);
      return false;
    }
  }

  return true;
}


  async selectProductCount(count: string) {
    await this.page.locator(this.SearchPageElements.showCountDropdown).selectOption(count);
  }

  async getDisplayedProductCount(): Promise<number> {
    return await this.page.locator(this.SearchPageElements.productList).count();
  }

  async hoverOverFirstProduct() {
    await this.page.locator(this.SearchPageElements.firstProduct).hover();
  }

  async clickQuickView() {
    await this.page.locator('button.btn-quick-view').first().click();
  }

  async isQuickViewDisplayed(): Promise<boolean> {
    return await this.page.locator(this.SearchPageElements.textQuickView).isVisible();
  }

  async clickAddToCart() {
    await this.page.locator(this.SearchPageElements.addToCartButton).first().click();
  }

  async isPopupMessageVisible(): Promise<boolean> {
    return await this.page.locator(this.SearchPageElements.popupMessage).isVisible();
  }

  async clickCheckout() {
    await this.page.locator(this.SearchPageElements.checkoutButton).click();
  }

  async isCheckoutPageDisplayed(): Promise<boolean> {
    return await this.page.locator(this.SearchPageElements.textShoppingCart).isVisible();
  }
}