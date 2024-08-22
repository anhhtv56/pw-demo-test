import { test } from "../test-options";
import { ContactPage } from "../../page-object/main-page/contactPage";



test('navigation test 2', async({page, contactPage}) => {

    const contactInfo = {
        "Anrede (optional)": "abc",
        "Name": "Anh",
        "Email": "anhhtv.93@gmail.com",
        "Rolle": "lead",
        "Organisation": "CL",
        "Anfrage": "comment"
    }
    const contactPageObject = new ContactPage(page)
    await contactPageObject.fillUpContactInfo(contactInfo)
})