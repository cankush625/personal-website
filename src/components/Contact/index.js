import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div>
      <div className={"container contact-page"}>
        <div className={"text-zone"}>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Got thoughts to share or questions to ask? Don't be shy! Hit me up
            at my email and let's make the virtual ink flow.
          </p>
          <div className={"contact-form"}>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className={"half"}>
                  <input
                    type={"text"}
                    name={"name"}
                    placeholder={"Name"}
                    required
                  />
                </li>
                <li className={"half"}>
                  <input
                    type={"email"}
                    name={"email"}
                    placeholder={"Email"}
                    required
                  />
                </li>
                <li>
                  <input
                    type={"text"}
                    name={"subject"}
                    placeholder={"Subject"}
                    required
                  />
                </li>
                <li>
                  <textarea name={"message"} placeholder={"Message"} required />
                </li>
                <li>
                  <input
                    type={"submit"}
                    className={"flat-button"}
                    value={"SEND"}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
