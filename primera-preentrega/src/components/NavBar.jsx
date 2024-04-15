import logo from "../assets/images/logo-boca.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-primary p-3">
                <div className="col"></div>
                <div className="col m-2 text-center">        
                    <a href="#"> 
                        <img src={logo} alt="BOCA" width={200}/>
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row bg-dark">
                <div className="col">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#" style={{fontSize:"20px", fontWeight:"bold"}}>Futbol</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#" style={{fontSize:"20px", fontWeight:"bold"}}>Basquet</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#" style={{fontSize:"20px", fontWeight:"bold"}}>Entrenamiento</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#" style={{fontSize:"20px", fontWeight:"bold"}}>Accesorios</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>

    )
}

export default NavBar;