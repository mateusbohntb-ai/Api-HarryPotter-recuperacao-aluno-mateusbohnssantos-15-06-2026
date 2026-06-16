import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Minha página React</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/signup">Cadastro</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
             <li>
            <Link to="Batata">Batata</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
