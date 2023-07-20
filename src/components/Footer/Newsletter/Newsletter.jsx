import React, { useContext, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
import { addDataFromApi } from "../../../utils/api";
import { Context } from "../../../utils/context";
import { BallTriangle } from "react-loader-spinner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [suceessMsg, setSuceessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const { setError } = useContext(Context);

  const handleInput = (event) => {
    let email = event.target.value;
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
    if (re.test(email)) {
      setErrorMsg(false);
    } else {
      setErrorMsg(true);
    }
    setEmail(email);
  };

  const handleSubmit = () => {
    if (!errorMsg && email !== "") {
      const obj = { Email: email };
      setSpinner(true);
      addDataFromApi("/api/newsletters", obj).then((res) => {
        if (res.name === "AxiosError") {
          setError(true);
          return;
        } else {
          setTimeout(() => {
            setSpinner(false);
            setSuceessMsg(true);
            setEmail("");
            setTimeout(() => {
              setSuceessMsg(false);
            }, 5000);
          }, 3000);
        }
      });
    }else{
      setErrorMsg(true);
    }
  };

  return (
    <div className="newsletter-section">
      {spinner && (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#8e2de2"
          ariaLabel="ball-triangle-loading"
          wrapperClass="loader"
          wrapperStyle=""
          visible={true}
        />
      )}
      ;
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => handleInput(e)}
          />
          <button onClick={() => handleSubmit()}>Subscribe</button>
        </div>
        <div className="text">
          {suceessMsg && (
            <div className="green">You have successfully subscribed!</div>
          )}
          {errorMsg && (
            <div className="red">Please enter the valid the email id.</div>
          )}
          {!suceessMsg && !errorMsg && (
            <div>Will be used in accordance with our Privacy Policy</div>
          )}
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
