import NavbarComponent from "./components/Navbar";
import Banner from "./components/Banner";
export default function Header(props) {
  return (
    <header id="header">
      <NavbarComponent setLanguage={props.setLanguage} />
      <Banner />
    </header>
  );
}
