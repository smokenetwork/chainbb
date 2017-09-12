import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Divider, Header, Icon, Menu, Segment } from 'semantic-ui-react'
import * as accountActions from '../actions/accountActions'
import { Link } from 'react-router-dom'

import Iframe from 'react-iframe'

class Sidebar extends React.Component {
  render() {
    // const forums = this.props.forums;
    const { account, section } = this.props
    const { isUser } = account
    let userMenu = false
    let requestForum = (
          <Segment basic textAlign='center'>
            <Header size='small'>
              Want to advertise here?
            </Header>
            <p>
              Email us at <Link to='mailto:hello@smoke.network'>hello@smoke.network</Link> to connect.
            </p>
          </Segment>
        )
    let subscribedForums = false
        // ,
        // categories = (
        //   <Menu vertical fluid color='grey' size='small'>
        //     <Link className={`item ${(!forums || !forums.group) ? 'active' : ''}`} to='/'>
        //       General Forums
        //     </Link>
        //     <Link className={`item ${(forums && forums.group === 'steem') ? 'active' : ''}`} to='/forums/steem'>
        //       Steem Forums
        //     </Link>
        //     <Link className={`item ${(forums && forums.group === 'crypto') ? 'active' : ''}`} to='/forums/crypto'>
        //       Crypto Forums
        //     </Link>
        //     {/*
        //     <Menu.Item disabled>My Feed</Menu.Item>
        //     <Menu.Item disabled>Communities</Menu.Item>
        //     <Menu.Item disabled>Trending</Menu.Item>
        //     <Menu.Item disabled>New Posts</Menu.Item>
        //     <Menu.Item disabled>Promoted</Menu.Item>
        //     <Menu.Item disabled>Tags</Menu.Item>
        //     */}
        //   </Menu>
        // )
    if(isUser) {
      subscribedForums = (
            <Segment textAlign='center'>
              <Header size='small'>
                No subscriptions found
              </Header>
              <p>
                Looks like you haven't subscribed to any forums yet.
              </p>
            </Segment>
          )
      if(this.props.subscriptions && this.props.subscriptions.forums) {
        const { forums } = this.props.subscriptions
        if(Object.keys(forums).length) {
          subscribedForums = (
            <Segment basic>
              <Header size='small' textAlign='center'>
                Forum Subscriptions
              </Header>
              <Menu vertical fluid color='grey' size='small'>
                {Object.keys(forums).map((index) => {
                  return (
                    <Link
                      key={index}
                      className='item'
                      to={`/forum/${forums[index].id}`}
                    >
                      <Header size='small'>
                        {(forums[index].parent)
                          ? (
                            <Header.Subheader>
                              Forums / {forums[index].parent_name}
                            </Header.Subheader>
                          )
                          : (
                            <Header.Subheader>
                              Forums
                            </Header.Subheader>
                          )
                        }
                        {forums[index].name}
                      </Header>
                    </Link>
                  )
                })}
              </Menu>
            </Segment>
          )
        }
      }
      userMenu = (
        <Menu vertical fluid color='grey' size='small'>
          <Link className={`item ${(section && section === 'feed') ? 'active' : ''}`} to='/feed'>
            <Icon name='users' />
            Activity Feed
          </Link>
          <Link className={`item ${(section && section === 'replies') ? 'active' : ''}`} to={`/replies`}>
            <Icon name='inbox' />
            Post Replies
          </Link>
        </Menu>
      )
    }
    return (
      <div>
        <Menu vertical fluid color='grey' size='small'>
          <Link className={`item ${(section && section === 'index') ? 'active' : ''}`} to='/'>
            <Icon name='home' />
            Forum Index
          </Link>
          <Link className={`item ${(section && section === 'forums') ? 'active' : ''}`} to='/forums'>
            <Icon name='list layout' />
            All Forums
          </Link>
        </Menu>
        {userMenu}
        {subscribedForums}
        <Divider />
        {requestForum}

        <Iframe url="/widget_price.html" position="relative" width="100%" height="220px" />

        <Iframe url="https://discordapp.com/widget?id=336824017241505793&theme=light" position="relative" width="100%" height="425px" />

      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    account: state.account,
    subscriptions: state.subscriptions
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(accountActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
