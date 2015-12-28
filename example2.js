'use strict'
class DumbComponent {

    render() {
        return "<div>There are {n} articles on site</div>";
    }

}

class Store {
    // Constructor
    constructor(props) {
        this.articles = [
            {title:'Title 1'},
            {title:'Title 2'},
            {title:'Title 3'}
        ]
    }

    getState(){
        return this.articles;
    }

}

function connect(store, dumbComponent) {
    dumbComponent.getState=function(){
        return store.getState();
    }

    return dumbComponent;

}
