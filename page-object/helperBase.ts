import { Locator, Page } from "@playwright/test";

export class HelperBase{
    readonly page: Page
    constructor(page: Page){
        this.page = page
    }

    async clickOnButtonName(btnName: string){
        await this.page.getByRole('button', { name: btnName }).click();
    }

    async getStyle(locator: Locator, property: string): Promise<string> {
        return await locator.evaluate( (el, property) => window.getComputedStyle(el)
          .getPropertyValue(property), property );
     };

}