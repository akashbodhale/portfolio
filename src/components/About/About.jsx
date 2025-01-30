import "./About.css"
import about from "../../assets/fullstack.png"

function About(){
return(
    <div className="about">
        <div className="image">
            <img src={about} alt="" className="aboutimg" />
        </div>

        <div className="aboutsection">
            <div className="aboutheading">
                <h1>ABOUT</h1>    
           </div>

           <div>
                <p className="subabout"> Professional Full stack developer having 3 years of experience. </p>
           </div>

           <div className="aboutdata">
                <p>
                    Hi I am Ethuastic Full software developer. I am pursing master of applied science, in software development specialization.I worked on ruby on rails and C# dotnet.I have 3 years of experience in healthcare domain.
                    I also did my post graduation diploma from CDAC institue in pune,where I learn Java, Adv.Java,MEAN stack,php,web application and C#.
                </p>
            </div>

            <div class="btnabout">
                <button className="btn"> Download CV </button>
            </div>

        </div>
     
    </div>
)
}
export default About