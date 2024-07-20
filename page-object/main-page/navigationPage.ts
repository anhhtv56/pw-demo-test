import {BrowserContext, Page, expect} from '@playwright/test'
import { HelperBase } from '../helperBase'
import { WebElementUtil } from '../utility/webElementUtil'
//import locale from '../../test-date/locale_DE.json'
import { ContactPage } from './contactPage'

export class NavigationPage{
    readonly page: Page
    readonly helperBase : HelperBase
    readonly webElementUtil : WebElementUtil
    readonly context : BrowserContext
    readonly locale : any

    constructor(page: Page, context: BrowserContext){
        this.page = page
        this.helperBase = new HelperBase(page)
        this.webElementUtil = new WebElementUtil(page)
        this.context = context
        this.locale = this.helperBase.getLocale()
    }

    private async moveToMenu(menu: string, subMenu: string){
        await this.page.getByRole('button', { name: menu }).hover();
        await this.page.getByLabel(menu).getByRole('link', { name: subMenu }).click();
    }

    async moveToProcivisOnePage(){
        await this.moveToMenu(this.locale.product, this.locale.procivisOne)
    }

    async moveToMobileGovernmentPlatformPage(){
        await this.moveToMenu(this.locale.product, this.locale.mobileGovernmentPlatform)
    }

    async moveToForDevelopersPage(): Promise<Page>{
        const pagePromise = this.context.waitForEvent('page');
        await this.moveToMenu(this.locale.forDevelopers, this.locale.procivisOneDocumentation)
        return await pagePromise
    }

    async moveToContactPage(): Promise<ContactPage>{
        await this.page.getByRole('link', { name: this.locale.contact, exact: true }).click();
        return new ContactPage(this.page);
    }

    async moveToBenefitsPage(){
        await this.page.locator('.nav_menu-links').getByRole('link', { name: this.locale.benefits, exact: true }).click();
    }
}