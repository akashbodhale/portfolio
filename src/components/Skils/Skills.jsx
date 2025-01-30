
import './Skills.css'
import react from '../../assets/react.svg'
import hcj from '../../assets/hcj.png'
import dotnet from '../../assets/dotnet.png'
import java from '../../assets/java-logo.png'
import ror from '../../assets/ror.png'
function Skills()
{
    return(
        <div className="Skills">
            <h1 className='heading'> Skills </h1>
            <div className='Skilllogos'>
                <div>
                    <img src={react} alt="" className='img'/>
                    <img src={hcj} alt="" className='img'/>
                    <img src={dotnet} alt="" className='img'/>
                    <img src={java} alt="" className='img'/>
                    <img src={ror} alt="" className='img'/>
                </div>
            </div>
        </div>
        

    )
}

export default Skills