import React from 'react'
import { BrowserRouter, browserHistory, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react'

import Account from '../containers/account'
import IndexLayout from '../components/layouts/index'
import FeedLayout from '../components/layouts/feed'
import ForumLayout from '../components/layouts/forum'
import ForumsLayout from '../components/layouts/forums'
import RepliesLayout from '../components/layouts/replies'
import Thread from '../containers/thread'
import TopicLayout from '../components/layouts/topic'

import BreadcrumbMenu from '../components/global/breadcrumb'
import FooterMenu from '../components/global/footer'
import HeaderMenu from '../components/global/menu'
import GlobalNotice from '../components/global/notice'

import './app.css'
import '../../node_modules/noty/lib/noty.css'


import withTracker from './withTracker'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter history={browserHistory}>
              <div className="AppContainer">
                <HeaderMenu />
                <BreadcrumbMenu />
                <GlobalNotice />
                <Container>
                  <Route exact path="/" component={withTracker(IndexLayout)} />
                  <Route path="/@:username" component={withTracker(Account)} />
                  <Route path="/feed" component={withTracker(FeedLayout)} />
                  <Route path="/forums" component={withTracker(ForumsLayout)} />
                  <Route path="/forums/:group" component={withTracker(IndexLayout)} />
                  <Route path="/forum/:id/:pageNo?" component={withTracker(ForumLayout)} />
                  <Route path="/replies" component={withTracker(RepliesLayout)} />
                  <Route path="/topic/:category" component={withTracker(TopicLayout)} />
                  <Route path="/:category/@:author/:permlink" component={withTracker(Thread)} />
                </Container>
                <BreadcrumbMenu />
                <FooterMenu />
              </div>
            </BrowserRouter>
        )
    }
}

export default App
