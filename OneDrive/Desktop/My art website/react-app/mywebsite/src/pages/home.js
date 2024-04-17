import React, { Component } from 'react';
import { downloadCV } from './download'; // Import downloadCV function
import portrait from './portrait.jpeg';
import logoPhoto from './spotify.png';
import image1 from './image1.png';
import image2 from './image2.png';
import sparkPhoto from './spark.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false // Initial state for dark mode
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentDidMount() {
    downloadCV(); // Call the downloadCV function when the component mounts
  }

  toggleTheme() {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode
    }));
  }

  render() {
    const { isDarkMode } = this.state;
    const projects = [
      { title: "Community Engagement and Building", description: "Faculty Ambassador roles at University of Pécs, Engineers Without Borders UK (Project Lead),   Oral and Written Communication,  Social Media Management and Digital Marketing,  Problem Solving and Research,  Teaching and Presentation Skills."},
      { title: "Achievements", description: "Regional Champion in National Merit Search, Government of Bangladesh. , Assistant Headgirl, Viqarunnisa Noon School & College, Finalist, Venturas Ltd Robotics Olympiad." },
      { title: "Oral and Written Communication", description: "Undergraduate Teaching Assistant roles at University of Pécs, International Student Ambassador role at University of Pécs" },
      { title: "Web Development", description: "HTML, CSS, JavaScript, React.js, Node.js, SQL, Svelte" },
      
    ];

    return (
      <div className={isDarkMode ? 'dark' : 'light'}>
        <div className="toggle-container">
          <i className="fa-solid fa-sun"></i>
          <label className="switch">
            <input type="checkbox" onChange={this.toggleTheme} checked={isDarkMode} />
            <span className="slider round"></span>
          </label>
          <i className="fa-solid fa-moon"></i>
        </div>

        <div className="container">
          <div className="overflow-hidden">
            <h1 className="drop-in-2"> Hi. I am <br /> Maisha. </h1>
            <div><img className="icon" id="icon" src={sparkPhoto} alt='spark' /></div>
          </div>
          <div className="overflow-hidden">
            <p className="drop-in-2"> Passionate front-end developer with a flair for creativity and a commitment to continuous learning, shaping digital experiences one line of code at a time.</p>
          </div>
        </div>
        <div><img className="icon1" id="icon1" src={sparkPhoto} alt='spark' /></div>

        <div className="anchor">
          <div className="image-gallery">
            <div className="image-container">
              <div className="left-capsule">
                <a href="https://maishapriyota.github.io/maisha-design.github.io/">
                  <img src={image2} alt="Design Website" className="image2" />
                  <p>Design Website</p>
                </a>
              </div>
              <div className="right-capsule">
                <a href="https://maishapriyota.github.io/Maiesha-Maimuna.github.io/">
                  <img src={image1} alt="Personal Portfolio" className="image1" />
                  <p>Personal Portfolio</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="about-container">
          <div className="profile">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="profile-content">
              <img src={portrait} alt="Maisha" className="portrait" />
              <div className="description">
                <p className="about">Resilient, Dynamic, Visionary</p>
                <p className="about1">Fueling my journey is an unwavering passion for learning. I thrive on the excitement of exploring new technologies, mastering emerging trends, and embracing fresh challenges. With an insatiable curiosity and a thirst for knowledge, I approach each day as an opportunity to broaden my skills and deepen my understanding.</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Recent Notable Experiences</h2>
        <div className="capsule-container">
          <div className="capsule">
            <div className="content">
              <h3>Google</h3>
              <p>Developer Student Club</p>
              <p className="content1">Empowering tech enthusiasts through workshops, events, and industry partnerships.
                Organizing hackathons and tech talks to foster innovation and collaboration.
                Leading a dedicated team of students in driving impactful projects and initiatives.</p>
            </div>
          </div>
          <div className="capsule">
            <div className="content">
              <h3>European Commission</h3>
              <p>Project Lead</p>
              <p className="content1">Succeeded to receive $10,000 grant to establish circular economy within university and community. Multiple event arrangement, podcast release one web app creation and maker space establishment.</p>
            </div>
          </div>
          <div className="capsule">
            <div className="content">
              <h3>Harvest Greener</h3>
              <p>Junior Front-end developer</p>
              <p className="content1">Help create the company's landing page as a react and front end developer. Tools used- HTML, CSS, React.js, Asana etc.</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="container1">
          {projects.map((project, index) => (
            <div className="box" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <div className="content-container">
          <h1 className="heading">My journey here has been about more than just academics.</h1>
          <p className="paragraph">My journey in tech has been an exhilarating ride. With a current CGPA of 4.5 out of 5.00, I've been diving deep into the world of web development while juggling a plethora of extracurricular activities. From leading the Google Developer Student Club to serving as a Project Lead for Engineers Without Borders UK, I've been on a mission to harness technology for social impact, all while fine-tuning my front-end development skills.</p>
        </div>

        <div className="content-container">
          <p className="paragraph">As an IT intern at Harvest Greener, I've had the chance to blend my love for design with my coding expertise, creating visually stunning and user-friendly interfaces for their digital sales platform. Design isn't just what it looks like; it's how it works. That's why I'm not only passionate about coding but also about crafting seamless user experiences that delight and inspire. Every project, every challenge is an opportunity to learn and grow. And I'm thrilled to be on this journey, pushing the boundaries of what's possible and shaping the future of web development. <br /> Front-End Developer Enthusiast, Design Aficionado, Tech Trailblazer.</p>
        </div>

        <footer>
          <div className="footer-container">
            <div className="spotify-capsule">
              <img src={logoPhoto} alt="Spotify Logo" />
              <div className="spotifytext">
                <p>On Repeat</p>
                <p className="spotify"><a href="https://open.spotify.com/track/4loXMor75kKVBB03ygwDlh?si=9d74e8b036464e96" target="_blank">Los Angeles</a></p>
              </div>
            </div>
            <div className="elsewhere">
              <h3>Elsewhere</h3>
              <ul>
                <li><a href="https://github.com/maishapriyota">Github</a></li>
                <li><a href="https://www.linkedin.com/in/maishamaimuna2/">LinkedIn</a></li>
                <li><a id="download-cv" href="#">CV</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2024 Maisha Maimuna</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
