import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const RATE_LIMIT_KEY = "contact_submissions";
const MAX_SUBMISSIONS = 2;
const WINDOW_MS = 5 * 60 * 60 * 1000; // 5 hours

const getRemainingMinutes = (timestamps) => {
  const oldest = timestamps[timestamps.length - MAX_SUBMISSIONS];
  const retryAt = oldest + WINDOW_MS;
  return Math.ceil((retryAt - Date.now()) / 60000);
};

const isRateLimited = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || "[]");
    const recent = stored.filter((t) => Date.now() - t < WINDOW_MS);
    return recent.length >= MAX_SUBMISSIONS
      ? { limited: true, minutesLeft: getRemainingMinutes(recent) }
      : { limited: false };
  } catch {
    return { limited: false };
  }
};

const recordSubmission = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || "[]");
    const recent = stored.filter((t) => Date.now() - t < WINDOW_MS);
    recent.push(Date.now());
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent));
  } catch {}
};

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [status, setStatus] = useState(null); // null | 'success' | 'error' | 'rate-limited'
  const [sending, setSending] = useState(false);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const { limited, minutesLeft } = isRateLimited();
    if (limited) {
      setMinutesLeft(minutesLeft);
      setStatus("rate-limited");
      return;
    }

    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          recordSubmission();
          setStatus("success");
          setSending(false);
          refForm.current.reset();
        },
        () => {
          setStatus("error");
          setSending(false);
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
            {status === "success" && (
              <div className={"contact-status contact-status--success"}>
                Message sent successfully. I'll get back to you soon!
              </div>
            )}
            {status === "error" && (
              <div className={"contact-status contact-status--error"}>
                Failed to send the message. Please try again.
              </div>
            )}
            {status === "rate-limited" && (
              <div className={"contact-status contact-status--error"}>
                Too many messages sent. Please try again in {minutesLeft} minute{minutesLeft !== 1 ? "s" : ""}.
              </div>
            )}
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
                    value={sending ? "Sending..." : "Send"}
                    disabled={sending}
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
