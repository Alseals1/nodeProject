const path = require('path'),
 fs = require('fs'),
 request = require('request-promise')


request('https://www.reddit.com/r/popular.json')
    .then(res => JSON.parse(res))
    .then(data => {
        let redArr = [];
        data.data.children.forEach(article => {
            let info = {
                title: article.data.title,
                url: article.data.url,
                author: article.data.author
            }
            redArr.push(info);
        });
        fs.writeFile("./popular-articles.json", JSON.stringify(redArr), (err) => {
            if (err) throw err;
            console.log('Its Saved!');
        });
    })
    .catch(err => console.log(err));



