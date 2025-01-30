import "./Navbar.css"
import {Link} from "react-scroll"

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <h1 className="logoh1"> A<span>kash</span> </h1>
            </div>
            <div className="listItems">
                <Link className="list">Home</Link>
                <Link className="list">About</Link>
                <Link className="list">Skills</Link>
                <Link className="list">Projects</Link>
            </div>
            <div className="btnNav">
                <button className="btn">contact me</button>
            </div>

        </div>
    )
}




export default Navbar