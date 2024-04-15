import logo from "../assets/images/logo-hym.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div className="container-fluid">
            <div className="row bg-light p-4">
                <div className="col"></div>
                <div className="col-md text-center">
                    <a href="#">
                        <img src={logo} alt="hym" width={200}/>
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Camisas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Pantalones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Gorros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;