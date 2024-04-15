import bannerHombre from "../assets/images/banner-ropa1.png"
import bannerMujer from "../assets/images/banner-ropa2.webp"
import bannerChicos from "../assets/images/banner-ropa3.webp"

const Banner = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col text-center">
                    <img src={bannerHombre} alt="Banner Hombres" className="img-fluid" />
                    <div style={{top:"122.2%",  background:"rgba(0, 0, 0, 0.75)", padding:"10px", color:"white", fontSize:"28px", fontWeight:"bold"}}>Hombres</div>
                </div>
                <div className="col text-center">
                    <img src={bannerMujer} alt="Banner Mujer" className="img-fluid"/>
                    <div style={{top:"122.2%",  background:"rgba(0, 0, 0, 0.75)", padding:"10px", color:"white", fontSize:"28px", fontWeight:"bold"}}>Mujeres</div>
                </div>
                <div className="col text-center">
                    <img src={bannerChicos} alt="Banner Chicos" className="img-fluid" />
                    <div style={{top:"122.2%",  background:"rgba(0, 0, 0, 0.75)", padding:"10px", color:"white", fontSize:"28px", fontWeight:"bold"}}>Niños</div>
                </div>
            </div>
            </div>
    )
}

export default Banner;