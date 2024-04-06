import Me from "../assets/Nicolas.jpg"
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { IconContext } from "react-icons";

export default function Projects() {
    return (
        <IconContext.Provider value={{ color: "#7E74F1", size: ".625em" }}>
            <div className="m-4 p-4 flex flex-wrap justify-between items-center border-2">
                <div>
                    <h5 className="font-serif text-lg text-gray-400">MY WORKS</h5><br />
                    <h1 className="font-bold text-3xl">Featured Projects</h1>                    
                </div>  
                <div className="flex">
                    <button className="bg-[#EAE6FE] opacity-50 mr-3.5 w-10 h-10 flex items-center justify-center rounded-2xl">
                        <GrPrevious />
                    </button>
                    <button className="bg-[#EAE6FE] w-10 h-10 flex items-center justify-center rounded-2xl">
                        <GrNext />
                    </button>                     
                </div>                
            </div>
                           

        </IconContext.Provider>
    )
}