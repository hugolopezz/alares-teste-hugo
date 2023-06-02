import "./styles.css";
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <header className="header-main">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Contratação de Planos</a>
          </li>
          <li>
            <a href="/plansDashboard">Listagem de Planos</a>
          </li>
          <li>
            <a href="/ordersDashboard">Listagem de Pedidos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
