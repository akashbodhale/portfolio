import './Contact.css'

function Contact(){
    return(
        <div className="contact">
            <div className='contactheading'>
                <h1> Contact Me </h1>
            </div>
            <div className='contactheading1'>
                <h3>Please fill out the form below to discuss any</h3>
            </div>
            <form>
                <input placeholder='Your Name' className='input1'></input> <br />
                <input placeholder='Your email' className='input2'></input><br />
                <textarea placeholder='Your Message' rows={5} cols={50} className='txtarea'></textarea><br/>
                <button className="btnsubmit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;