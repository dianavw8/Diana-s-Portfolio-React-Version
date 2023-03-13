//import logo from './logo.svg';
//import './ProjectPortfolio.css';

import AboutMe from "./AboutMe";

function ProjectPortfolio(props) {
    if(props.componentToShow == undefined || props.componentToShow == null || props.componentToShow == '')
    {
        return (
            <div className="ProjectPortfolio">
                <p>Testing ProjectPortfolio</p>
            </div>
          );
    }
    else if(props.componentToShow == 'AboutMe')
    {
        return (
            <div className="ProjectPortfolio">
                <AboutMe/>
            </div>
          );
    }
 
}

export default ProjectPortfolio;