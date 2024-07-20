import {Page} from '@playwright/test'
import { SDKPage } from './sdkPage';

export class NavigationDocPage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async moveToSDKpage(): Promise<SDKPage>{
        await this.page.getByRole('link', { name: 'SDK' }).click();
        return new SDKPage(this.page)
    }
    
}