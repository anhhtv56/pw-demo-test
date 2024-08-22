import {test, expect} from '@playwright/test'
import { APIHelperBase } from './apiHelperBase';

test.beforeEach(async({page}) => {
    await page.goto('https://conduit.bondaracademy.com/')
})

test.afterEach(async ({}, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`${testInfo.title} did not run as expected!`);
})

const apiURL = 'https://conduit-api.bondaracademy.com'

test('delete article with helper', async({request}) => {
    const apiHelper = new APIHelperBase(request)
    const accessToken = await apiHelper.getToken(`${apiURL}/api/users/login`, 
    {
        "user":{"email":"anhautotest@test.com","password":"123456"}
    })
    const articleId = await apiHelper.createArticleSucessfully(`${apiURL}/api/articles/`, accessToken, 
    {
        "article":{"title":"this is a test title","description":"description","body":"abc","tagList":[]}
    })

    await apiHelper.deleteArticleSuccessfully(`${apiURL}/api/articles/${articleId}`, accessToken, articleId)
    
})

test('delete article', async({request}) => {
    const response = await request.post(`${apiURL}/api/users/login`, {
      data: {
        "user":{"email":"anhautotest@test.com","password":"123456"}
      }
    })  
    const responseBody = await response.json()
    const accessToken = responseBody.user.token
  
    const articleResponse = await request.post(`${apiURL}/api/articles/`, {
      data: {
        "article":{"title":"this is a test title","description":"description","body":"abc","tagList":[]}
      },
      headers: {
        Authorization: `Token ${accessToken}`
      }
    })
  
    expect(articleResponse.status()).toEqual(201)
    const articleResponseBody = await articleResponse.json()
    const articleId = articleResponseBody.article.slug

    const deleteArticleResponse = await request.delete(`${apiURL}/api/articles/${articleId}`, {
        headers: {
            Authorization: `Token ${accessToken}`
          }
    })
    expect(deleteArticleResponse.status()).toEqual(204)
    
})

