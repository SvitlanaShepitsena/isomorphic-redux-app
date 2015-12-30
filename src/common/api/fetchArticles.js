import request from 'axios';

export default function () {
    return new Promise((resolve, reject)=> {
        let articles;
        request.get('https://chicagowepapp.firebaseio.com/articles.json').then((res=> {
            let data = res.data;
            if (typeof data === "object") {
                articles = Object.keys(data).map(key=> {
                    let article = data[key];
                    article.key = key;
                    return article;
                });
            } else {
                articles = data;
            }

            resolve({isFetching: false, articles: articles, error: null});

        }))
    })
}
