import React from "react"
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_Icon.svg"
import phone_icon from "../../assets/phone_Icon.svg"
import location_icon from "../../assets/location_Icon.svg"


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f1d93c65-0069-483d-a9ff-e8e99f7c75d3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            alert("Email sent successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return(
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nostrum excepturi adipisci dolorum, aspernatur soluta fugiat doloribus tempore ipsam animi enim eveniet assumenda hic nam doloremque tenetur porro, dicta illo.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt=""/> <p>lgehner2@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={phone_icon} alt=""/> <p>(314) 443 - 2961</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt=""/> <p>Saint Louis, MO</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email"/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;