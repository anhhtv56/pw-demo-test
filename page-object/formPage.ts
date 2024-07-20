import { Locator, Page } from "@playwright/test";

export class FormPage{
    readonly locator: Locator
    constructor(locator: Locator){
        this.locator = locator
    }

    async fill(inputFieldName: string, inputFieldValue: string){
        await this.locator.locator(`//div[label[*/text()="${inputFieldName}"]]//*[@type]`).fill(inputFieldValue)
    }

    async checkbox(checkboxName: string, value: boolean){
        if(value)
            await this.locator.locator(`//label[*[contains(text(), "${checkboxName}")]]`).click()
    }

    async clickOnBtn(btnName: string){
        await this.locator.getByRole('button', {name: btnName}).click()
    }

}