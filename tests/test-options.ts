import {test as base} from '@playwright/test'
import { NavigationPage } from '../page-object/main-page/navigationPage'

export type TestOptions = {
    contactPage: string  
}

export const test = base.extend<TestOptions>({
    contactPage : async ({page, context}, use) => {
        await page.goto('/')
        const navigateTo = new NavigationPage(page, context)
        await navigateTo.moveToContactPage()
        await use('')
    }
})