import emailjs from "@emailjs/browser";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import validations from "../utils/validations";
import linkedIn from "../assets/images/linkedin_logo.png";
import gitHub from "../assets/images/github.png";
import malt from "../assets/images/malt_logo.png";
import NavBar from "../components/NavBar";
import Frame from "../components/Frame";
import Blob from '../components/animatedBlob/Blob';
import './contact.css';
import animations from '../animations/contactAnimations';
import { useTranslation } from "react-i18next";


const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState("");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [isValid, setIsValid] = useState({ name: true, email: true, message: true });
  const [textAreaRows, setTextAreaRows] = useState(window.innerHeight < 750 ? 5 : 8);
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    if (isValid.name === false) {
      setNameError("Name just allows letters.");
    } else if (isValid.message === false) {
      setMessageError("The message can contain up to 1600 characters.");
    } else if (isValid.email === false) {
      setEmailError("Invalid email format.");
    } else {
      setNameError(null);
      setMessageError(null);
      setEmailError(null);
    }
  }, [isValid]);

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
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
    setStatus('SENDING');
    emailjs.send("service_bl20gpo", "template_0sszpno", contactInfo, "wr-KKmtjr5EHUUy73")
      .then(() => {
        setContactInfo({
          name: '',
          email: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED', error);
      })
  };

  useEffect(() => {
    const handleResize = () => {
      setTextAreaRows(window.innerHeight < 750 ? 4 : 8);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          <h1>{t('contact.title')}</h1>
          <p>
          {t('contact.text')}
          </p>
          <div className="social_container">
            <p>{t('contact.contact')}</p>
            <div className="icons">
              <a href="https://www.malt.es/profile/gerardsolaneshernandez" target="_blanck"><motion.img key={'iconL'} variants={animations.iconLeft} src={malt} alt="malt-icon" /></a>
              <a href="https://github.com/Quotropic-96" target="_blanck"><motion.img key={'iconM'} variants={animations.iconMid} src={gitHub} alt="github-icon" /></a>
              <a href="https://www.linkedin.com/in/gerard-solanes-hernandez/" target="_blanck"><motion.img key={'iconR'} variants={animations.iconRight} src={linkedIn} alt="linkedin-icon" /></a>
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
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder={t('contact.formName')} value={contactInfo.name} onChange={handleChange} required />
            {nameError && <p>{nameError}</p>}
            <input type="email" name="email" placeholder="EMAIL" value={contactInfo.email} onChange={handleChange} required />
            {emailError && <p>{emailError}</p>}
            <textarea name="message" placeholder={t('contact.formMessage')} rows={textAreaRows} value={contactInfo.message} onChange={handleChange} maxLength="1600" required />
            {messageError && <p>{messageError}</p>}
            <button type="submit" className={status === 'SENDING' ? 'sendingButton' : ''} disabled={status === 'SENDING'}>{status === 'SENDING' ? t('contact.formSending') : t('contact.formSend')}</button>
          </form>
          {status === 'SUCCESS' && <p className="sentMessage">Your message has been sent successfully. Thank you!</p>}
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
