describe("check url", function () {
    this.tags = ["administrace"]
    it(".@", function (browser) {
        browser.windowRect({width: 1047, height: 904})
        .url(browser.baseUrl)        
        .pause(1000)
        .click('body > app-root > div.content > div:nth-child(4) > a:nth-child(1)')
        browser.windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        })
        .assert.urlContains("https://angular.io/tutorial")
        .closeWindow()
        .pause(200)
        browser.windowHandles(function (result) {
            var handle = result.value[0];
            browser.switchWindow(handle);})
        browser.click('body > app-root > div.content > div:nth-child(4) > a:nth-child(2)')
        browser.windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        })
        .assert.urlContains("https://angular.io/cli")
        .closeWindow()
        .pause(200)
        browser.windowHandles(function (result) {
            var handle = result.value[0];
            browser.switchWindow(handle);})
        browser.click('body > app-root > div.content > div:nth-child(4) > a:nth-child(3)')
        browser.windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        })
        .assert.urlContains("https://material.angular.io/")
        .closeWindow()
        .pause(200)
        browser.windowHandles(function (result) {
            var handle = result.value[0];
            browser.switchWindow(handle);})
        browser.click('body > app-root > div.content > div:nth-child(4) > a:nth-child(4)')
        browser.windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        })
        .assert.urlContains("https://blog.angular.io/")
        .closeWindow()        
        .pause(200)
        browser.windowHandles(function (result) {
            var handle = result.value[0];
            browser.switchWindow(handle);})
        browser.click('body > app-root > div.content > div:nth-child(4) > a:nth-child(5)')
        browser.windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        })
        .assert.urlContains("https://angular.io/guide/devtools")
        .closeWindow()
        .end();
    });
});
