/* Fetch data from firebase and convert returned Object to array*/
export default function firebaseMiddleware() {
    return next => action => {
        /* destructuring action object to local variables*/
        const { promise, isFb,type, ...rest } = action;

        /* filter out all fb requests */
        if (!promise || !isFb) return next(action);
        const REQUEST = type + '_REQUEST';
        const SUCCESS = type + '_SUCCESS';
        const FAILURE = type + '_FAILURE';
        /*triggers ARTICLES_GET_REQUEST*/
        next({...rest, type: REQUEST});
        return promise
            .then(req => {
                let articles;
                /*conversion fb data from obj to array*/
                var data = req.data;
                if (data) {
                    if (typeof data === "object") {
                        articles = Object.keys(data).map(key=> {
                            let article = data[key];
                            article.key = key;
                            return article;
                        });
                    } else {
                        articles = data;
                    }
                }
                /* Slowing up request to see the loader*/
                    next({...rest, articles, type: SUCCESS});
                    return true;
            })
            .catch(error => {
                next({...rest, error, type: FAILURE});
                console.log(error);
                return false;
            });
    };
}