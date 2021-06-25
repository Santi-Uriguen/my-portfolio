import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import EnHeader from "./ENcomponents/header/EnHeader";
import EnMain from "./ENcomponents/main/EnMain";
import EnFooter from "./ENcomponents/footer/EnFooter";
import "./styles/App.css";
import "./styles/MobileApp.css";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("ES");
  if (language === "ES") {
    return (
      <div className="App" id="App">
        <Header setLanguage={setLanguage} />
        <Main />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="App" id="App">
        <EnHeader setLanguage={setLanguage} />
        <EnMain />
        <EnFooter />
      </div>
    );
  }
}

export default App;
