'use strict'
class StoreFlux{
    constructor(){

        state:{
            articles[{title:'Article 1'}]
        }

    }

    mutation(article){
        this.articles.push(article);
    }
}
'use strict'

class StoreRedux {
    constructor(){


    }

    mutation(state,article){
        this.articles.push(article);
    }
}
