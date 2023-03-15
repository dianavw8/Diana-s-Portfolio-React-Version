

function AboutMe() {
  return (
    <div className="AboutMe" >
          <div id="about">
      <div className="container">
        <div className="text-center">
          <h1 style={{marginTop: '65px'}}>ABOUT ME</h1>
          <img src={`${process.env.PUBLIC_URL}/assets/dribble-office_4x.jpg`} alt="avatar"/>
          <hr className="divider-line"/>
          <div className="about-text">
            <p> As a student at the University of North Carolina Charlotte and a coding bootcamp course participant, I am dedicated to pursuing my goal of becoming a software developer. I am passionate about the field and thrive on the challenge of solving complex problems through programming. Above all, I am a lifelong learner who is always eager to expand my knowledge and hone my skills. With a keen eye for detail and a deep appreciation for innovation, I am excited to embark on a career in software development and contribute to the industry's ever-evolving landscape. </p>
            <p>Here are some of the skills I have learned so far.</p>
          </div>
          <div className="row dev-skills-row">
            <div className="dev-skills">
              <h3 style={{fontSize: '215%', flex:'100%'}}>Developer Skills:</h3>
              <ul className="about-text">
                <li>Javascript</li>
                <li>Git</li>
              </ul>
              <ul className="about-text">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <ul className="about-text">
                <li>React</li>
                <li>Node.js</li>
              </ul>
              <ul className="about-text">
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutMe;