import React, { Component } from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

export default class HeaderMenu extends Component {
  render() {
    return (
      <Segment inverted vertical className="footer" style={{marginTop: "2em"}}>
        <Container>
          <Grid stackable className="divided equal height stackable">
            {/*
            <Grid.Column width={3}>
              <h4 class="ui inverted header">About</h4>
              <List class="ui inverted link list">
                <Link to="#" className="item">Sitemap</Link>
                <Link to="#" className="item">Contact Us</Link>
                <Link to="#" className="item">Religious Ceremonies</Link>
                <Link to="#" className="item">Gazebo Plans</Link>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <h4 class="ui inverted header">Services</h4>
              <List class="ui inverted link list">
                <Link to="#" className="item">Banana Pre-Order</Link>
                <Link to="#" className="item">DNA FAQ</Link>
                <Link to="#" className="item">How To Access</Link>
                <Link to="#" className="item">Favorite X-Men</Link>
              </List>
            </Grid.Column>
            */}
            <Grid.Column width={16} textAlign='center'>

              <h4 className="ui inverted header">
                <img src="/logo.png" className="ui image" />
                eostalk.io
              </h4>
              <p>the <a href='https://alpha.smoke.network/' target='_new'> SMOKE.NETWORK </a> Community, alpha version, powered by <a href='https://beta.chainbb.com/' target='_new'> chainbb.com</a></p>

              

            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
