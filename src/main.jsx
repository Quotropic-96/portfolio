import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import i18next from "i18next";
import globalEng from "./translations/eng/global.json";
import globalEsp from "./translations/esp/global.json";
import globalCat from "./translations/cat/global.json";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "eng",
  resources: {
    eng: {
      global: globalEng,
    },
    esp: {
      global: globalEsp,
    },
    cat: {
      global: globalCat,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Router>
);
