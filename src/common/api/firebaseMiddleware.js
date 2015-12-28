export default function firebaseMiddleware() {
    return next => action => {
        const { promise, isFb,type, ...rest } = action;

        if (!promise || !isFb) return next(action);

        const SUCCESS = type + '_SUCCESS';
        const REQUEST = type + '_REQUEST';
        const FAILURE = type + '_FAILURE';
        next({...rest, type: REQUEST});
        return promise
            .then(req => {
                let articles;

                var data = req.data;
                if (data) {
                    articles = Object.keys(data).map(key=>data[key]);
                }
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