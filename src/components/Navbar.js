import earth from "../images/earth.png"
export default function Navbar(){
    return(
        <nav>
        <img src= {earth} alt="" className="nav-logo" />
        <h1 className="nav-header">my travel journal.</h1>
        </nav>
    )
}
