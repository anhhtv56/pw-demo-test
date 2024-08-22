import { APIRequestContext, expect } from "@playwright/test";

export class APIHelperBase{
    readonly request: APIRequestContext
    constructor(request: APIRequestContext){
        this.request = request
    }

    async getToken(loginURL: string, loginData: object): Promise<string>{
        
        const response = await this.request.post(loginURL, {
            data: loginData
          })  
        const responseBody = await response.json()
        return responseBody.user.token
    }

    async createArticleSucessfully(createURL: string, accessToken: string, articleData: object): Promise<string>{
        const articleResponse = await this.request.post(createURL, {
        data: articleData,
        headers: {
            Authorization: `Token ${accessToken}`
        }
        })   
        expect(articleResponse.status()).toEqual(201)
        const articleResponseBody = await articleResponse.json()
        return articleResponseBody.article.slug 
    }

    async deleteArticleSuccessfully(deleteURL: string, accessToken: string, articleId: string){
        const deleteArticleResponse = await this.request.delete(deleteURL, {
            headers: {
                Authorization: `Token ${accessToken}`
              }
        })
        expect(deleteArticleResponse.status()).toEqual(204)
    }

}