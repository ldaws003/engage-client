import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Image, Grid, Responsive, Segment } from 'semantic-ui-react';
import './Landing.scss'

import MailChimpForm from './MailChimpForm'

const copyText = require('../../public/static/landing_page_copy.json');
// const appLink = "https://www.figma.com/proto/DFWuuo5ZVOEgEmKedY6I8bRd/engage_prototype---Page-1?scaling=contain&node-id=158%3A393"
const appLink = '#/feed';
const breakPointSize = 767;

const linkStyle = {
  color: '#074d91',
};

class Landing extends Component {
  componentDidMount() {
    gtag('config', 'UA-116538234-1', {
      page_title: 'home',
      page_path: '/',
    });
  }
  render() {
    return (
      <div
      style={{
        overflow: 'visible' /* has to be scroll, not auto */,
        webkitOverflowScrolling: 'touch',
      }}>
        <Segment
          textAlign="center"
          style={{ position: 'relative', minHeight: 380, padding: '1em 0em' ,
                    border : 'None'}}
          vertical
        >
          <Container fluid style={{marginTop: '5em'}}>
              {/* <Header
                as="h1"
                content={copyText.page_header.header_text}
                inverted
                style={{
                  fontSize: '4em',
                  color: '#192a56',
                  fontWeight: 'normal',
                  fontFamily: 'Pacifico, cursive',
                  marginBottom: 0,
                  marginTop: '1.5em',
                  textAlign: 'center',
                }}
              /> */}
              <Header
                as="h2"
                content={copyText.page_header.body_text}
                inverted
                style={{
                  fontSize: '2.8em',
                  fontWeight: '500',
                  color: 'black',
                  marginBottom: '0.5em',
                  textAlign: 'center',
                }}
              />
              <p style={{ fontSize: '1.5em',
                           color: 'black',
                           textAlign: 'center',
                           fontWeight: '300',
                           lineHeight: '1.5em'}}>Start using Engage today and be part of the discussion! Vote and comment on proposals from your local government</p>
              <Link
                to="/feed"
                style={{
                  color: '#FFF',
                }}
              >
                <Button
                  primary
                  size="large"
                  style={{
                    backgroundColor: '#192a56',
                    marginTop: '1rem',
                    // float: 'left',
                  }}
                >
                  Start Engaging
                </Button>
              </Link>
          </Container>
        </Segment>
        <Segment style={{
            backgroundColor: '#f6f9fc',
            border: 'None',
            boxShadow: 'None',
            paddingTop: '4em',
            paddingBottom: '4em'
          }}>
          <Container>
              <Header
                as="h2"
                content="Stay up to date! Get the latest proposals in your inbox."
                inverted
                style={{
                  fontSize: '1.8em',
                  fontWeight: '500',
                  color: '#000',
                  textAlign: 'center',
                }}
              />
              <MailChimpForm id="home-page"/>
          </Container>
          {/* <div style={{ width: '100%' }}>
            <Responsive minWidth={breakPointSize}>
              <Image
                src="https://source.unsplash.com/VLDDaRX04GM"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: -1,
                  width: '100%',
                  height: '100%',
                  minHeight: '650px',
                  objectFit: 'cover',
                  opacity: '0.5',
                }}
              />
            </Responsive>
            <Responsive maxWidth={breakPointSize}>
              <Image
                src="https://source.unsplash.com/VLDDaRX04GM"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: -1,
                  width: '100%',
                  height: 'auto',
                  minHeight: '650px',
                  objectFit: 'cover',
                  opacity: '0.5',
                }}
              />
            </Responsive>
           </div> */}
        </Segment>
        <Segment
          vertical
          style={{
            padding: '6em 0em',
          }}
        >
          <Container text>
            <Grid columns="equal" align="center">
              <Grid.Row>
                <Grid.Column>
                  <Image
                    src="/static/image/news-feed-icon.png"
                    style={{
                      height: '100px',
                      width: '100px',
                      textAlign: 'center',
                    }}
                  />
                  <div
                    style={{
                      color: 'black',
                      marginTop: '1em',
                    }}
                  >
                    Get Informed on City Developments
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    src="/static/image/comment-icon.png"
                    style={{
                      borderRadius: '50%',
                      height: '100px',
                      width: '100px',
                    }}
                  />
                  <div
                    style={{
                      color: 'black',
                      marginTop: '1em',
                    }}
                  >
                    View, Read, and Comment on Recent Agenda Items
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    src="/static/image/people-icon.png"
                    style={{
                      height: '100px',
                      width: '100px',
                    }}
                  />
                  <div
                    style={{
                      color: 'black',
                      marginTop: '1em',
                      marginBottom: '3em',
                    }}
                  >
                    Feel Empowered to Engage In-Person at City Meetings
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <hr
              style={{
                border: 'solid 1px #a4b0be',
                marginBottom: '3em',
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <Header as="h2">{copyText.what_is_engage.header_text}</Header>
              <p
                style={{
                  color: 'black',
                  fontSize: '1.1em',
                }}
              >
                {copyText.what_is_engage.body_text}
              </p>
            </div>
          </Container>
        </Segment>
      </div>
    );
  }
}
export default Landing;
