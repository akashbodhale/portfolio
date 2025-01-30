
import './HeroSection.css'
import myimg from "../../assets/pro.png"

function HeroSection()
{
    return(
        <div  className="herosection">
            <div className="left">
                <div className="para">
                   <p> Web Developer, </p>
                </div>
                <div className="herosectionh1">
                    <h1>I am <span>Akash</span></h1>
                </div>
                <div className="stack">
                    <h1>Full Stack Developer</h1>
                </div>
                <div className="para2">
                    <p>I am passionate and Experienced software developer with a passion for creating efficient and scalable web application. Proficient in multiple programming languages,
                    including Java, .NET core, Ruby on rails, C++. Experienced in AWS cloud services and AWS ACADEMY Cloud Foundation certified.</p>
                </div>
            </div>
            <div className="right">
                <img src={myimg} alt=""  className="myimage"/>
            </div>
        </div>
    )
}

export default HeroSection