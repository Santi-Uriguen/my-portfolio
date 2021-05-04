import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer"
import "./styles/App.css";
import "./styles/MobileApp.css";

function App() {
  return (
    <div className="App" id="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
