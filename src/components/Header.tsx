import Logo from "assets/logoNicolas.svg"
import TreeDots from "assets/treeDots.png"
import ThemeToggle from "assets/themeToggle.png"

export function Header(){
    return(
        <div className="flex flex-wrap justify-around w-full mt-5">
            <div className="flex items-center gap-2">
                <img className="m-2" src={Logo} alt="logo"></img>
                <h1>Nicolas</h1>
            </div>
            <div className="flex flex-wrap items-center gap-16">
                <h2>Services</h2>
                <h2>Portfolios</h2>
                <h2>Experience</h2>
                <h2>Blog</h2>
                <img src={TreeDots} alt="Options" />
            </div>
            <img className="mx-8" src={ThemeToggle} alt="Theme Toggle" />
        </div>
    )
}