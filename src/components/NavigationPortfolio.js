//import logo from './logo.svg';
//import './HeaderPortfolio.css';

function NavigationPortfolio(props) {

    
    
    return (
      <div className="NavigationPortfolio">



        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Diana Santacruz</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
                <li>
                <a href="#home"onClick={() => {
                    console.log("testing onClick of Home");
                    props.showComponent('');

                }}>Home</a>
                </li>
                <li>
                <a href="#about" onClick={() => {
                    console.log("testing onClick of AboutMe");
                    props.showComponent('AboutMe');

                }}>About Me</a>
                </li>
                <li>
                <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                <a href="#contact">Contact</a>
                </li>
                <li>
                <a href="#resume">Resume</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>





    </div>
    );
  }
  
  export default NavigationPortfolio;