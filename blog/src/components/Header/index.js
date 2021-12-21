import "./styles.css";
import mainImage from "./header-blog.jpeg";

function Header() {
    return (
        <header>
        <h1>Meu Blog React</h1>
        <img src={mainImage} alt="Imagem do Mandaloriano"/>
      </header>
    )
}

export default Header;