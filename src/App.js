import logo from './logo.svg';
import './App.css';
import Fade from 'react-reveal/Fade'
import { useState } from 'react';
import { Bounce, Zoom } from 'react-reveal'
import { Link } from 'react-scroll'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import resume from './images/resume.png'
import Navigationbar from './components/navigationbar/Navigationbar';
import Section from './components/section/Section';
import { TaggedContentCard } from 'react-ui-cards';
import { SkillBars } from 'react-skills';

function App() {
const skillsData= [
  {
    name: 'Java',
    level: 90,
    color: '#52C6EF',
    levelProgress: false,
  },
  {
    name: 'SQL',
    level: 90,
    color: '#52C6EF',
  },
  {
    name: 'HTML/CSS',
    level: 90,
    color: '#52C6EF',
  },
  {
    name: 'ReactJS',
    level: 80,
    color: '#52C6EF',
  },
  {
    name: 'JavaScript',
    level: 75,
    color: '#52C6EF',
  },
  {
    name: 'Android Studio',
    level: 75,
    color: '#52C6EF',
  },
  {
    name: 'Backend',
    level: 70,
    color: '#52C6EF',
  },
  {
    name: 'Python',
    level: 70,
    color: '#52C6EF',
  },
  {
    name: 'Frontend',
    level: 70,
    color: '#52C6EF',
  },
  {
    name: 'Cloud',
    level: 65,
    color: '#52C6EF',
  },
]


const FORM_ENDPOINT = "https://formspree.io/f/mvolnzbr"
const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
    <div className="home-wrapper">
    <div className="home">
      <div>
        <Fade bottom distance="40px">
          <h1 className="greeting-text">
            Hello there, I'm <span className="name">Raveenth Maheswaran</span>.
          </h1>
          <h2 className="greeting-text">
            <Typewriter
              options={{
                strings: [
                  'Software Engineering Graduate',
                  'Full Stack Development',
                  'Cloud Application Development',
                  'Mobile Application Development',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 8,
                cursor: '|',
                delay: 100,
              }}
            />
          </h2>
          <Bounce cascade>
            <div className="links">
              <a style={{ margin: '10px' }}
                href="https://www.linkedin.com/in/raveenth-maheswaran/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="Linkedin Logo" width="50px" />
              </a>
              <a
                style = {{ margin: '10px' }}
                href="https://www.github.com/raveen15"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub Logo" width="50px" />
              </a>
              <a
                style = {{ margin: '10px' }}
                href="https://drive.google.com/file/d/1Rrfcd7us8H_G3ehax8Uc-1LHqFIK9D90/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={resume} alt="Resume Logo" width="50px" color='white' />
              </a>
            </div>
          </Bounce>
          <div className="scroll-down">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-63}
              duration={500}
            >
              <ArrowDropDownCircleIcon
                fontSize="large"
                style={{ pointerEvents: 'fill', cursor: 'pointer', color: 'white'}}
              />
            </Link>
          </div>
        </Fade>
      </div>
      <Navigationbar/>
      </div>
      <div className="about">
      <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2 style={{textAlign: "center"}}>About Me</h2>
            <Zoom>
              <p style={{ fontFamily: "sans-serif" ,fontSize: "20px", verticalAlign: "middle", lineHeight: "30px", padding: "10px"}}>
                <ul>
                  <li style={{marginBottom: "10px"}}>
                    Recent software engineering graduate with IoT specialization
                    from Ontario Tech University.
                  </li>
                  <li style={{marginBottom: "10px"}}>
                    Passionate in developing full-stack applications, mobile applications, 
                    and cloud applications.
                  </li>
                  <li style={{marginBottom: "10px"}}>
                    Professional finance experience in a non-profit, government-funded organization.
                  </li>
                  <li style={{marginBottom: "10px"}}>
                    Currently looking for entry-level software development oppurtunities to gain 
                    experience in the software industry.
                  </li>
                </ul>
                  <div style={{ textAlign: "center" }}>
                    Feel free to contact me anytime! Leave a message under the contact 
                    section of this page.
                  </div>
              </p>
            </Zoom>
          </div>
          </Fade>
          <Fade>
          <div className="about-text">
            <h2 style={{textAlign: "center"}}>Skills</h2>
            <SkillBars skills={skillsData} levelProgress="false" duration={4}/>
          </div>
          </Fade>
      </div>
    </Section>
    <Section title="Projects">
      <div className="about-content">
        <Fade duration={1000}>
           <TaggedContentCard
            href='https://github.com/raveen15/COVID-19-Monitoring'
            thumbnail='https://github.com/raveen15/COVID-19-Monitoring/blob/main/assets/icon.png?raw=true'
            title='COVID-19 Monitoring'
            description='Mobile application to track blood oxygen levels and heart rate
            via cloud capabilities'
            tags={[
                'React Native',
                'C++',
                'GCP',
                'NoSQL'
            ]}
          />
          <TaggedContentCard
            href='https://github.com/raveen15/Car-Rental-Reservation'
            thumbnail='https://cdn-icons.flaticon.com/png/512/2433/premium/2433938.png?token=exp=1655752716~hmac=f411c72f17a0311db7d0c1cfffd38f44'
            title='ROS Luxury Car Rentals'
            description='Car rental reservation website to reserve luxury car rentals through 
            online forms.'
            tags={[
                'HTML',
                'CSS',
                'JavaScript',
                'PHP'
            ]}
          />
          <TaggedContentCard
            href='https://github.com/raveen15/AI-2048'
            thumbnail='https://play-lh.googleusercontent.com/sCJWPOvPaaw9I-sW6bqw5nXDYk_P5KUCWFkBn3gyirfe4gZIbUbQSuGNksef7PZ_GJQ'
            title='2048-AI'
            description='2048 AI Engine to solve the game via Expectimax and Monte Carlo algorithms.'
            tags={[
                'Python'
            ]}
          />
        </Fade>
      </div>
      <div className="about-content">
        <Fade duration={1000}>
           <TaggedContentCard
            href='https://github.com/raveen15/IoT-Thermometer'
            thumbnail='https://cdn-icons.flaticon.com/png/512/2941/premium/2941331.png?token=exp=1655752669~hmac=1eb8a7a0816b205cdc1df6bde537b2a8'
            title='ThermoCheck'
            description='IoT-based temperature monitoring system to monitor temperature and
            humidity values.'
            tags={[
                'Django',
                'C++',
                'HTML',
                'CSS'
            ]}
          />
          <TaggedContentCard
            href='https://github.com/raveen15/CRM-System'
            thumbnail='https://cdn-icons-png.flaticon.com/512/3930/3930395.png'
            title='CRM System'
            description='Customer relationship management system to manage contacts through
            an internal system.'
            tags={[
                'Spring Boot'
            ]}
          />
          <TaggedContentCard
            href='https://github.com/raveen15/react-gh-pages'
            thumbnail='https://github.com/raveen15/react-gh-pages/blob/gh-pages/avatar.png?raw=true'
            title='Portfolio Website'
            description='Portfolio website to showcase my skills, projects, and experience.'
            tags={[
                'ReactJS'
            ]}
          />
        </Fade>
      </div>
    </Section>
    <Section title="Contact">
      <div className="about-content" style={{ marginBottom: "20px" }}>
      <div className="about-text">
        <Fade duration={1000}>
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div style={{marginBottom: "20px", display: "flex" , alignItems: "center", justifyContent: "center"}}>
            <TextField
              type="text"
              label="Name"
              name="name"
              variant='outlined'
              style={{width: "100%", maxWidth: "500px"}}
              required
            />
          </div>
          <div style={{marginBottom: "20px", display: "flex" , alignItems: "center", justifyContent: "center"}}>
            <TextField
              type="email"
              label="Email"
              name="email"
              variant='outlined'
              style={{width: "100%", maxWidth: "500px"}}
              required
            />
            </div>
            <div style={{marginBottom: "20px", display: "flex" , alignItems: "center", justifyContent: "center"}}>
            <TextField
              label="Message"
              name="message"
              variant='outlined'
              multiline
              minRows={4}
              style={{width: "100%", maxWidth: "500px"}}
              required
            />
            </div>
            <div style={{marginBottom: "20px", display: "flex" , alignItems: "center", justifyContent: "center"}}>
            <Button
              type="submit"
              variant='contained'
              endIcon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>}
              style={{backgroundColor: "#52C6EF"}}
            >
              Send
            </Button>
            </div>
        </form>
        </Fade>
      </div>
      </div>
    </Section>
    </div>
    </div>
  );
}

export default App;
