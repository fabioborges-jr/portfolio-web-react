import Logo from "assets/logoFabio.svg"
import TreeDots from "assets/treeDots.png"
import ThemeToggle from "assets/themeToggle.png"

export function Header(){
    return(
        <div>
            <img src={Logo} alt="logo"></img>
            <h2>Services</h2>
            <h2>Portfolios</h2>
            <h2>Experience</h2>
            <h2>Blog</h2>
            <img src={TreeDots} alt="Options" />
            <img src={ThemeToggle} alt="Theme Toggle" />
        </div>
    )
}