import {Link} from "react-router-dom";

export default function Header() {
    return (
      <header>
        <nav>
          <Link to="/">
            <h2 className="header-link">Home</h2>
          </Link>
          <Link to="/ofertas">
            <h2 className="header-link">Ofertas</h2>
          </Link>
          <Link to="/produtos">
            <h2 className="header-link">Produtos</h2>
          </Link>
        </nav>
      </header>
    );
  }