import { Locator, Page } from "@playwright/test";
import locale_DE from '../test-date/locale_DE.json'
import locale_EN from '../test-date/locale_EN.json'

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

    getLocale(): any{
        if(process.env.locale == 'EN')
            return locale_EN
        else
            return locale_DE
     }

}