import {Page} from '@playwright/test'
import { FormPage } from '../formPage'

export class SDKPage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async fillUpInquiryForm(inquiryInfo : Object){
        const frame = this.page.frameLocator('.pipedriveWebForms iframe')
        const formPage = new FormPage(frame.locator('form'))
        for(let key in inquiryInfo){
            await formPage.fill(key, inquiryInfo[key])
        }
    }
    
    
}