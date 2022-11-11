const puppeteer = require("puppeteer");

let getItemByKeyword = (keyword, countryCode = "US") => {
    return new Promise(async (resolve, reject) => {
      try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        page.setViewport({ width: 1280, height: 720 });
        await page.goto(
          "https://www.instagram.com/explore/tags/manchesterunited/"
        );
  
        const articles = await page.evaluate(`(async() => {
                          window.scrollTo(0, 5000);
                                  await new Promise((resolve) => setTimeout(resolve, 3000));
                                  window.scrollTo(0, 5000);
                                  await new Promise((resolve) => setTimeout(resolve, 5000));
                                  let article = document.querySelectorAll('._aagu img');
                          console.log(article)
                                  let ar_article = [];
                                  article.forEach(item => {
                                      ar_article.push({
                                          src: item.getAttribute('src').trim(),
                                          desc: item.getAttribute('alt')
                                      })
                                  });
                                  return ar_article
                         })()`);
  
        await browser.close();
  
        resolve({
          errCode: 0,
          articles,
        });
      } catch (e) {
        reject(e);
      }
    });
  };
  
module.exports = {
  getItemByKeyword: getItemByKeyword,
};
