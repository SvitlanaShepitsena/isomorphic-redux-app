import { Route } from "react-router";
import React from "react";

import App from "./containers/App";
/**/
//Redux Smart
import CounterPage from "./containers/CounterPage";
import RedditPage from "./containers/RedditPage";
import TodoPage from "./containers/TodoPage";

//Redux Dumb
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import BlogPage from "./components/Blog";
import AddArticlePage from "./components/articles/AddArticle";
import error404 from "./components/404";

export default (
    <Route name="app" path="/" component={App}>
        <Route path="home" component={HomePage}/>
        <Route path="reddit" component={RedditPage}/>
        <Route path="todo" component={TodoPage}/>
        <Route path="counter" component={CounterPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="blog" component={BlogPage}/>
        <Route path="add-article" component={AddArticlePage}/>
        <Route path="*" component={error404}/>
    </Route>
);

