// import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import validations from "../utils/validations";
import linkedIn from "../assets/images/linkedin_logo.png";
import email from "../assets/images/email.png";
import malt from "../assets/images/malt_logo.png";
import NavBar from "../components/NavBar";
import Frame from "../components/Frame";
import Blob from '../components/animatedBlob/Blob';
import './contact.css';
import animations from '../animations/contactAnimations';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState({ name: true, email: true, message: true });

  // const form = useRef();

  useEffect(() => {
    if (isValid.name === false) {
      setError("Name just allows letters.");
    } else if (isValid.message === false) {
      setError("The message can contain up to 1600 characters.");
    } else if (isValid.email === false) {
      setError("Invalid email format.");
    } else {
      setError(null);
    }
  }, [isValid]);

  useEffect(() => {
    if (status === 'SUCCES') {
      setTimeout(() => {
        setStatus('');
      }, 3000)
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prev => {
      return {
        ...prev,
        [name]: value
      }
    });
    if (name === "name") {
      setIsValid(prev => {
        return {
          ...prev,
          name: validations(value, "name")
        }
      });
    } else if (name === "message") {
      setIsValid(prev => {
        return {
          ...prev,
          message: validations(value, "message")
        }
      });
    } else {
      setIsValid(prev => {
        return {
          ...prev,
          email: validations(value, "email")
        }
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_p480rce", "template_dfi8l95", contactInfo, "4iGMCZ24PZXokCkrN")
      .then(() => {
        setContactInfo({
          name: '',
          email: '',
          message: ''
        });
        setStatus('SUCCES');
      }, error => {
        console.log('FAILED', error);
      })
  }
   
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_p480rce",
  //       "template_dfi8l95",
  //       form.current,
  //       "4iGMCZ24PZXokCkrN"
  //     )
  //     .then(() => {
  //       setConfirmationMessage(true);
  //       setTimeout(() => {
  //         setConfirmationMessage(false);
  //       }, 3000)
  //       e.target.reset();
  //     }, (err) => {
  //       console.log('FAILED', err);
  //     });
  // };

  // const { register, trigger, formState: { errors } } = useForm();

  // const onSubmit = async (e) => {
  //   const isValid = await trigger();
  //   if (!isValid) {
  //     e.preventDefault();
  //   }
  // }

  return (
    <div className="frame">
      <Frame />
      <NavBar />
      <div className="contact">
        <motion.div className="title_text_social_container"
          key='body'
          variants={animations.body}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <h1>CONTACT</h1>
          <p>
            Tell us about your project, arrange a meeting with us and let&apos;s start
            creating together.
          </p>
          <div className="social_container">
            <p>You can also contact us through:</p>
            <div className="icons">
              <motion.img key={'iconL'} variants={animations.iconLeft} src={malt} alt="malt-icon" />
              <motion.img key={'iconM'} variants={animations.iconMid} src={email} alt="email-icon" />
              <motion.img key={'iconR'} variants={animations.iconRight} src={linkedIn} alt="linkedin-icon" />
            </div>
          </div>
        </motion.div>
        <motion.div
          key='blob'
          variants={animations.blob}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <Canvas style={blobStyles} camera={{ position: [0.0, 0.0, 8.0] }}>
            <Blob color='#ED6A5A' />
          </Canvas>
        </motion.div>
        <motion.div className="contact_form_container"
          key='form'
          variants={animations.form}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          {/* <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/ffb05a1c6c8278126a1ff8db4252828b"
            method="POST"
          > 
            <input
              type="text"
              placeholder="NAME" 
              {...register("name", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.name && (
              <p>
                {errors.name.type === 'required' && "Name is required."}
                {errors.name.type === 'maxLength' && "Max length is 100 character."}
              </p>
            )}
            <input
              type="text"
              placeholder="EMAIL" 
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
            <p>
                {errors.email.type === 'required' && "Email is required."}
                {errors.email.type === 'pattern' && "Invalid email address."}
            </p>
            )}
            <textarea
              type="text"
              placeholder="MESSAGE"
              rows="8"
              {...register("message", {
                required: true,
                maxLength: 1600,
              })}
            />
            {errors.message && (
              <p>
                {errors.message.type === 'required' && "Message is required."}
                {errors.message.maxLength === "maxLength" && "Max length is 1600 chracter."}
              </p>
            )}
            <button type="submit">SEND</button>
          </form> */}
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="NAME" value={contactInfo.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="EMAIL" value={contactInfo.email} onChange={handleChange} required />
            <textarea name="message" placeholder="MESSAGE" rows="8" value={contactInfo.message} onChange={handleChange} maxLength="1600" required />
            <button type="submit">SEND</button>
            {error && <p>{error}</p>}
            {status && <p>Your message has been sent successfully. Thank you!</p>}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

const blobStyles = {
  height: '100vh',
  position: 'absolute',
  top: '0',
  right: '0',
  zIndex: '0',
}

export default Contact;
