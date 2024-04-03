import Logo from "assets/logoNicolas.svg"
import TreeDots from "assets/treeDots.png"
import ThemeToggle from "assets/themeToggle.png"

export function Header(){
    return(
        <div className="flex flex-wrap justify-around w-full mt-5 border-2 border-red-600">
            <div className="flex items-center gap-2 border-2 border-green-600">
                <img className="m-2" src={Logo} alt="logo"></img>
                <h1>Nicolas</h1>
            </div>
            <div className="flex flex-wrap items-center gap-6 sm:gap-16 border-2 border-yellow-600 w-full sm:w-auto justify-center">
                <a href="/services">Services</a>
                <a href="/portfolio">Portfolios</a>
                <a href="/experience">Experience</a>
                <img src={TreeDots} alt="Options" />
                <button className="border-2 border-black">
                    <img src={ThemeToggle} alt="Theme Toggle" />
                </button>            
            </div>
        </div>
    )
}