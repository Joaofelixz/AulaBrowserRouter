import {link} from "react-router-dom";

export default function Header(){
    return(
        <>
        <header>
            <div>
            <h1>Loja da Nike</h1>
            </div>
            <nav>
                <link to="/">
                 <h2 class='header-link'>Home</h2>
                </link>
                <link to="/Ofertas">
                  <h2 class='header-link'>Ofertas</h2>
                </link>
                <link to="/Produtos">
                <h2 class='header-link'>Produtos</h2>
                </link>
            </nav>
        </header>
        </>
    )
}