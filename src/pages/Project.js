import BtnGitHub from "../components/btnGitHub/btnGitHub";
import img from "./../images/projects/02-big.jpg";

const Project = () => {
    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">Video service</h1>
                    <img src={img} alt="" className="project-details__cover" />
                    <div className="project-details__description">
                        <p>Skills: React, Node.js, MongoDB</p>
                    </div>
                    <BtnGitHub link="https://gitHub.com" />
                </div>
            </div>    
        </main>
    );
}
 
export default Project;