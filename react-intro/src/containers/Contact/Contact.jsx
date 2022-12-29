import React from 'react';
import { Element } from "react-scroll"
import styles from "./Contact.module.scss"

const Contact = () => {
    return (
        <Element name = "Contact">
        <div className = {styles.Contact}>

            <div className = {styles.yellowbox}>
            <img id = "axis" className = {styles.yellowflower} src = {require("../../assets/yellowflower.png")}></img>
            </div>
            <div className = {styles.FormBox}>
                <h1>Please either fill out the form below...</h1>
            <form action="https://formspree.io/f/xzbwraee" method="POST">
            {/* Form Name */}
            <fieldset>
            <label class="text-type">Full Name:</label>
            <input class ="text-type" type="text" placeholder="Your name..." required/> 
        </fieldset>
          {/* <!--Form - Business--> */}
        <fieldset>
            <label class="text-type">Business Name (if applicable):</label>
            <input class ="text-type" type="text" placeholder="Your business..."/> 
        </fieldset>
          {/* <!--Form - Country--> */}
     <fieldset>
            <label class="text-type">Country: </label>
            <input class ="text-type" type="text" placeholder="Your country..."  required/>   
        </fieldset>
          {/* <!--Form - Email--> */}
        <fieldset>
            <label class="text-type">Email Address:</label>
            <input class ="text-type" placeholder="Your email..." type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"required/> 
        </fieldset>
          {/* <!--Form - Number--> */}
        <fieldset>
            <label class="text-type">Phone Number:</label>
            <input class ="text-type" type="number" placeholder="Your phone number..." /> 
        </fieldset>
          {/* <!--Form - Message --> */}
        <fieldset>
            <label class="text-type">Inquiry:</label>
            <textarea cols ="30" rows="6" class ="text-type__resize" placeholder="Type your message..." required></textarea>
        </fieldset>
        <button class="btn btn__submit" type = "submit" >Submit</button>
        <button class="btn btn__clear" input type="reset">Clear</button>
        </form>
        <h2>... Or visit me at my LinkedIn or GitHub</h2>
        </div>
            <div className = {styles.purplebox}>
            <img  className = {styles.purpleflower} src = {require("../../assets/purpleflower.png")}></img>
            </div>

        </div>
        </Element>
    );
};

export default Contact;