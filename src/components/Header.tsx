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
                <a href="/services">Services</a>
                <a href="/portfolio">Portfolios</a>
                <a href="/experience">Experience</a>
                <img src={TreeDots} alt="Options" />
            </div>
            <button>
                <img className="mx-8" src={ThemeToggle} alt="Theme Toggle" />
            </button>
            
        </div>
    )
}