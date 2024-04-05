import Github from "../assets/Github.svg"
import Cellphone from "../assets/telephone.svg"
import Email from "../assets/mail.svg"
import Location from "../assets/location-outline.svg"
import LinkedIn from "../assets/Linkedin.svg"

export default function Presentation() {
    return (
        <body>            
            <div className="m-4 p-4 flex justify-between border-2">

                <div className="w-2/5">
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

                <div className="flex items-center w-2/5">
                    <img className="min-w-96" src="https://engepesca.com.br/uploads/imagens/800x600_tilapia-pesquisadores-descobrem-na-composicao-creatina-taurina-e-glutamato-249-7424.jpg" alt="logo"></img>                                     
                </div>
            </div>  
        </body>        
    )
}