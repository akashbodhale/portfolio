import "./Navbar.css"
import {Link} from "react-scroll"

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <h1 className="logoh1"> A<span>kash</span> </h1>
            </div>
            <div className="listItems">
                <Link activeClass="active" to="herosection" spy={true} smooth={true} offset={-100} className="list">Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100}  className="list">About</Link>
                <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-100}  className="list">Skills</Link>
                <Link activeClass="active" to="project" spy={true} smooth={true} offset={-100}  className="list">Projects</Link>
         
            </div>
            <div className="btnNav">
                <button onClick={()=>{const contactsection=document.getElementsByClassName('contact')[0];
                    if(contactsection)
                        {
                            contactsection.scrollIntoView({behavior:"smooth"})
                        }
                }}  className="btn">contact me</button>
            </div>

        </div>
    )
}




export default Navbar