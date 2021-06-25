import EnNavbarComponent from "./components/EnNavbar";
import EnBanner from "./components/EnBanner";
export default function Header(props) {
  return (
    <header id="header">
      <EnNavbarComponent setLanguage={props.setLanguage} />
      <EnBanner />
    </header>
  );
}
