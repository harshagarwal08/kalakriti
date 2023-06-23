import React from "react";

//INTERNAL IMPORT
import Style from "../styles/contactus.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../components/componentsindex";
import { HiOutlineMail } from "react-icons/hi";

const contactus = () => {
  return (
    <div className={Style.contactus}>
      <div className={Style.contactus_box}>
        <h1>Contact Us</h1>
          <div className={Style.contactus_box_box_right}>
            <form className={Style.form_container}>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={formStyle.Form_box_input_userName}
                />
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" placeholder="Enter your Email" />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="description">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <Button
                btnName="Send Message"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
      </div>
    </div>
  );
};

export default contactus;
