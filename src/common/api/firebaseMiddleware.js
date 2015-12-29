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

        next({...rest, type: REQUEST});
        return promise
            .then(req => {
                let articles;

                var data = req.data/**/;
                if (data) {
                    articles = Object.keys(data).map(key=>data[key]);
                }
                /* Slowing up request to see the loader*/
                setTimeout(()=> {

                    next({...rest, articles, type: SUCCESS});
                    return true;
                }, 1000);
            })
            .catch(error => {
                next({...rest, error, type: FAILURE});
                console.log(error);
                return false;
            });
    };
}