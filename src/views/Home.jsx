import { Link } from "react-router-dom";
import { useState } from "react";
import { useViewport } from "../hooks/useViewport";
import "./Home.css";
import Frame from "../components/Frame";
import { motion, AnimatePresence } from "framer-motion";
import Blob from "../components/animatedBlob/Blob";
import { Canvas } from "@react-three/fiber";
import animations from "../animations/homeAnimations";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [activeLink, setActiveLink] = useState(null);
  const { windowWidth } = useViewport();
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleMouseOver = (text) => {
    setActiveLink(text);
  };

  const handleMouseOut = () => {
    setActiveLink(null);
  };

  const renderLink = (to, text) => (
    <Link
      to={to}
      onMouseOver={() => handleMouseOver(text)}
      onMouseOut={handleMouseOut}
    >
      {activeLink === text ? (
        <>
          <AnimatePresence>
            <span>&lt;{text}</span>
            <motion.span
              key={"/>"}
              variants={animations.menuItem}
              initial="hidden"
              animate="animate"
              exit="exit"
            >
              {" "}
              /&gt;
            </motion.span>
          </AnimatePresence>
        </>
      ) : (
        <span>{windowWidth > 1000 ? `<${text}` : `<${text} />`}</span>
      )}
    </Link>
  );

  return (
    <div className="frame" style={{ overflow: "hidden" }}>
      <Frame />
      <div className="home">
        <div className="blob_div">
          <motion.p
            className="blob_text_1"
            key={"text1"}
            variants={animations.text}
            initial="hidden"
            animate="animate"
            exit="exit"
          >
            {t("home.text")}
          </motion.p>
          <motion.p
            className="blob_text_2"
            key={"text2"}
            variants={animations.text}
            initial="hidden"
            animate="animate"
            exit="exit"
          >
            {t("home.text")}
          </motion.p>
          <motion.div
            key="blob"
            variants={animations.blob}
            initial="hidden"
            animate="animate"
            exit="exit"
          >
            <Canvas
              style={windowWidth > 1000 ? blobStylesDesktop : blobStylesMobile}
              camera={{ position: [0.0, 0.0, 8.0] }}
            >
              <Blob color="#ED6A5A" />
            </Canvas>
          </motion.div>
        </div>
        <motion.div
          className="home_content"
          key="body"
          variants={animations.body}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <div className="web_title_container">
            <h1 className="web_title">{t("home.title")}</h1>
            <h4 className="web_subtitle">{t("home.subtitle")}</h4>
          </div>
          <ul className="home_menu" style={{ zIndex: "15" }}>
            <li>{renderLink("/projects", t("home.menu.projects"))}</li>
            <li>{renderLink("/about-me", t("home.menu.about"))}</li>
            <li>{renderLink("/contact", t("home.menu.contact"))}</li>
          </ul>
          <li className="language_selector">
            <button
              className={i18n.language === "cat" ? "selected" : ""}
              onClick={() => handleChangeLanguage("cat")}
            >
              CAT
            </button>
            <p>|</p>
            <button
              className={i18n.language === "esp" ? "selected" : ""}
              onClick={() => handleChangeLanguage("esp")}
            >
              ESP
            </button>
            <p>|</p>
            <button
              className={i18n.language === "eng" ? "selected" : ""}
              onClick={() => handleChangeLanguage("eng")}
            >
              ENG
            </button>
          </li>
        </motion.div>
      </div>
    </div>
  );
};

const blobStylesDesktop = {
  height: "100vh",
  position: "absolute",
  top: "0",
  left: "-40%",
  zIndex: "0",
};

const blobStylesMobile = {
  height: "70vh",
  width: "100vw",
  position: "absolute",
  top: "50%",
  left: "-10%",
  zIndex: "0",
};

export default Home;
