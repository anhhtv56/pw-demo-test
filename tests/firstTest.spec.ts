import { expect, test } from "@playwright/test";
import { NavigationPage } from "../page-object/main-page/navigationPage";
import { FormPage } from "../page-object/formPage";
import { NavigationDocPage } from "../page-object/procivis-one-doc/navigationDocPage";

test.describe('Test suite 1', ()=>{
    test.beforeEach(async({page}) => {
        await page.goto('/')
    })

    test('navigation test', async({page, context}) => {
        const navigateTo = new NavigationPage(page, context) 
        await navigateTo.moveToProcivisOnePage()
        await expect(page).toHaveScreenshot('procivisOnePage.png', { maxDiffPixels: 100})

        await navigateTo.moveToMobileGovernmentPlatformPage()
        await expect(page).toHaveScreenshot('mobileGovernmentPage.png', { maxDiffPixels: 100})

        const contactPage = await navigateTo.moveToContactPage()
        await expect(page).toHaveScreenshot('contactPage.png', { maxDiffPixels: 100})

        const contactInfo = {
            "Anrede (optional)": "abc",
            "Name": "Anh",
            "Email": "anhhtv.93@gmail.com",
            "Rolle": "lead",
            "Organisation": "CL",
            "Anfrage": "comment"
        }
        await contactPage.fillUpContactInfo(contactInfo)
    })

    test('open For Developers page and fill up form on SDK page', async({page, context})=>{
        var navigateTo = new NavigationPage(page, context)
        const newPage = await navigateTo.moveToForDevelopersPage()
        const navigateDocTo = new NavigationDocPage(newPage)
        const sdkPage = await navigateDocTo.moveToSDKpage()

        const inquiryInfo = {
            "Salutation (optional)": "abc",
            "Name": "Anh",
            "Email": "anhhtv.93@gmail.com",
            "Role": "lead",
            "Organisation": "CL",
            "Request": "request"
        }
        
        await sdkPage.fillUpInquiryForm(inquiryInfo)
        await newPage.close()
        await navigateTo.moveToContactPage()
    })

    test('register for update at benefits page', async({page, context}) => {
        var navigateTo = new NavigationPage(page, context)
        await navigateTo.moveToBenefitsPage()
        const frame = page.frameLocator('.pipedriveWebForms iframe')
        const formPage = new FormPage(frame.locator('form'))
        await formPage.fill('Anrede (optional)', 'abc')
        await formPage.fill('Name', 'anh')
        await formPage.fill('E-Mail', 'anhhtv.93@gmail.com')
        await formPage.checkbox("Ja", true)
    })


})
