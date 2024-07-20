import { Page } from "@playwright/test";

export class WebElementUtil{
    readonly page: Page
    constructor(page: Page){
        this.page = page
    }

    async waitForAttributeChangeFromValue(selector: string, attribute: string, initialStyle: string){
        // Wait for the style attribute to change from the initial value
        await this.page.waitForFunction(
            () => {
              const element = document.querySelector(selector);
              return element && element.getAttribute(attribute) !== initialStyle;
            }
          );
    }

}