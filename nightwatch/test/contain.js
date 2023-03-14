describe("contain", function () {
    this.tags = ["administrace"]
    it(".@", function (browser) {
        browser.windowRect({width: 1047, height: 904})
        .url(browser.baseUrl)        
        .pause(1000)
        browser.assert.textContains('body > app-root > div.content > div:nth-child(4) > a:nth-child(1) > span', "Learn Angular")
        browser.assert.textContains('body > app-root > div.content > div:nth-child(4) > a:nth-child(2) > span', "CLI Documentation")
        browser.assert.textContains('body > app-root > div.content > div:nth-child(4) > a:nth-child(3) > span', "Angular Material")
        browser.assert.textContains('body > app-root > div.content > div:nth-child(4) > a:nth-child(4) > span', "Angular Blog")
        browser.assert.textContains('body > app-root > div.content > div:nth-child(4) > a:nth-child(5) > span', "Angular DevTools")
        .end();
    });
});

