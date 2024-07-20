import {Page} from '@playwright/test'
import { FormPage } from '../formPage'

export class ContactPage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async fillUpContactInfo(contactInfo : Object){
        const frame = this.page.frameLocator('.pipedriveWebForms iframe')
        const formPage = new FormPage(frame.locator('form'))
        for(let key in contactInfo){
            await formPage.fill(key, contactInfo[key])
        }
    }
    
    
}