import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.jpg';
import GitHub from './images/github.svg';
import Linkedin from './images/linkedin.png';
import BGParticles from './BGParticles';
import Pdf from './myResume.pdf';
import privacyPolicy from './privacyPolicy.pdf'
import resumeIcon from './images/resumeIcon.png';
import './styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };

        this.checkInterval = this.checkInterval.bind(this);
        this.checkInterval2 = this.checkInterval2.bind(this);
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      checkInterval() {
        var thing = this.refs.option1;
        thing.classList.remove("static-option-style");
        thing.classList.add("option-style");
      }

      checkInterval2() {
        var thing = this.refs.option2;
        thing.classList.remove("static-option-style");
        thing.classList.add("option-style")
      }
    render() {
          const centerElement = {
            position: 'absolute',
            width: '80%',
            top: '45%',
            left: '10%',
            transform: 'translate(0, -40%)'
          }
          const welcomeText = {
            opacity: '0.8',
            fontSize: '8vh'
          }
          const optionStyle = {
            fontSize: '6vh',
            color: 'white',
            opacity: '0.75'
          }
          const logoStyle = {
            borderRadius: '50%',
            width: '30vh'
          }
          const icon = {
            width: '4vh',
            marginRight: '0.7vw',
            marginLeft: '0.7vw'
          }
          const rezIcon = {
            width: '10vh',
            marginRight: '0.7vw',
            marginLeft: '0.7vw'
          }
          const gone = {
            display: 'none'
          }

        const welcomeSpacer = {
          width: '5vw'
        }
        return (
          <div>
          <BGParticles />
                <div style={centerElement}>
                <img class="nav-item img-thumbnail shadow-lg" src={Logo} alt=":)" style={logoStyle}/>
                  <h1 class="display-1 font-weight-bolder" style={welcomeText}>Welcome to My Personal Website!</h1>
                  <div>
                      <Link to="/AboutMe/"><button ref="option1" type="button" class="static-option-style btn" onMouseOver={() => this.checkInterval()}>About Me</button></Link>
                      <Link to="/Blog/"><button ref="option2" type="button" class="btn static-option-style" onMouseOver={() => this.checkInterval2()}>Blog</button></Link>
                  </div>
                  <div>
                    <a href="https://github.com/MJKeo"><img src={GitHub} alt="github" style={icon}/></a>     
                    <a href = {Pdf} target = "_blank"><img src={resumeIcon} alt="resume" style={rezIcon}/></a>       
                    <a href = {privacyPolicy} target = "_blank"><img src={resumeIcon} alt="privacy Policy" style={gone}/></a>           
                    <a href="https://linkedin.com/in/michael-keohane"><img src={Linkedin} alt="linkedin" style={icon}/></a>
                  </div>
                </div>
        </div> 
        )
    }
}

export default Home;