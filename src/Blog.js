import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.jpg';
import './blog.css'
import SpyGlass from './images/spyGlass.png';
import db from './config.js';
import BlogDisplay from './BlogDisplay';
import RecentPost from './RecentPost';

class Blog extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.pushData = this.pushData.bind(this);
        this.state = {
          isOpen: false,
          data: []
        };
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      componentWillMount() {
        const that = this;
        db.ref('Data/value').once('value').then(function(snapshot) {
          that.setState(() => ({
            data: snapshot.val()
          }))
        });
      }

      pushData() {
        var arr = [["Title1", "Date1", "Overview1", "Content1"], ["Title2", "Date2", "Overview2", "Content2"], ["Title3", "Date3", "Overview3", "Content3"]]
        db.ref("Test").update({
          thing: arr
        })
      }

    render() {

        const mainDiv = {
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, #ffffff, #f0eff8, #e0e0f1, #E0E1E3, #E0E1E3)'
        }
          const navbar = {
            position: 'fixed',
            background: 'radial-gradient(circle, #4057ab, #364b9b, #2d408b, #23357c, #182a6d)',
            width: '100%',
            left: '0px',
            top: '0px'
        }
          const smallLogo = {
            borderRadius: '50%',
            border: 'white',
            width: '3.5vw',
          }
          const centerly = {
            margin: '0',
            float: 'none',
            listStyleType: 'none'
          }
          const line = {
            width: '20vw',
            marginLeft: '40px',
            height: '0.5px',
            backgroundColor: 'gray'
          }
          const border = {
            border: 'solid'
          }
      
          const spacer = {
              height: '5vw',
          }
          const smallSpacer = {
            height: '0.5vw'
          }
          const postSpacer = {
              height: '2vw'
          }
          const mainBreak = {
            marginLeft: '10%',
            marginRight: '10%'
          }
          console.log(this.state.data)

          var posts = null;
          posts = this.state.data.map((element, i) => (
            <div>
              <BlogDisplay key={i} title={element[0]} date={element[1]} overview={element[2]} content={element[3]} />
              <div style={postSpacer}></div>
            </div>
          ))
        return (
            <div style={mainDiv}>
                <div class="mx-auto main-box">
                  <div style={spacer}></div>
                  <div class="title-box">
                    <h1 class="title font">Welcome to My Blog!</h1>
                    <h3 class="font sub-title">Check back weekly for new posts!</h3>
                  </div>
                  <hr style={mainBreak}/>
                  <div style={postSpacer} />
                  <div style={postSpacer} />
                  <div class="row">
                    <div class="col">
                      <h1 class="font sub-heading">Posts</h1>
                      <div style={postSpacer} />
                        <div>
                          {posts}
                          <div style={spacer} />
                        </div>
                      </div>
                    <div class="col-4">
                    <div style={postSpacer} />
                      <div class="search-box">
                        <img src={SpyGlass} class="spy-icon" />
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                      </div>
                      <div class="recent-posts text-left">
                        <div style={smallSpacer} />
                        <div style={smallSpacer} />
                        <h2>Recent Posts</h2>
                        <hr class="shorten"/>
                          {this.state.data.map((element, i) => {
                            if (i < 4 && i != this.state.data.length - 1) {
                              return <RecentPost line={true} title={element[0]} date={element[1]} content={element[3]} />
                            } else if (i <= 4) {
                              return <RecentPost line={false} title={element[0]} date={element[1]} content={element[3]} />
                            } else {
                              return <h4></h4>
                            }
                          })}
                      </div>
                    </div>
                  </div>
                </div>
                    <nav class="navbar-sticky shadow" style={navbar}>
                        <div class="text-center">
                            <ul style={centerly}>
                                <li>
                                  <Link to="/"><button type="button" class="btn item font-weight-bold">Home</button></Link>
                                  <Link to="/"><img class="nav-item img-thumbnail" src={Logo} alt=":)" style={smallLogo}/></Link>
                                  <Link to="/AboutMe/"><button type="button" class="btn item font-weight-bold">About Me</button></Link>
                                </li>
                            </ul>
                        </div>
                      </nav>
            </div>
        )
    }
}

export default Blog;