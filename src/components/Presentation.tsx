import Github from "../assets/Github.svg"
import Cellphone from "../assets/telephone.svg"
import Email from "../assets/mail.svg"
import Location from "../assets/location-outline.svg"
import LinkedIn from "../assets/Linkedin.svg"
import Me from "../assets/1545128978660.jpg"

export default function Presentation() {
    return (
        <body>            
            <div className="m-4 p-4 flex flex-wrap justify-between border-2">

                <div className="md:w-2/5">
                    <p className="font-serif text-lg text-gray-400">MY NAME IS</p><br />
                    <p className="font-bold text-3xl">Nicolas Montoro Rodrigues.</p><br />
                    <p className="text-lg">Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX.</p><br />  

                    <div>
                        <div className="flex">
                            <img className="mb-3 mr-6" src={Github} alt="GitHub"></img>
                            <img className="mb-3" src={LinkedIn} alt="LinkedIn"></img>
                        </div>
                        <div className="flex">
                            <img className="mb-3 mr-6" src={Cellphone} alt="Cellphone"></img>
                            <p className="mb-3">(XX) XXXXX-XXXX</p>
                        </div>
                        <div className="flex">
                            <img className="mb-3 mr-6" src={Email} alt="Email"></img>
                            <p className="mb-3">tilapia@gmail.com</p>
                        </div>
                        <div className="flex">
                            <img className="mb-3 mr-6" src={Location} alt="Location"></img>
                            <p className="mb-3">Location</p>
                        </div>
                    </div>                                                
                </div>

                <div className="flex items-center">
                    <img className="w-96 min-w-44 h-auto" src={Me} alt="Eu"></img>                               
                </div>
            </div>  
        </body>        
    )
}