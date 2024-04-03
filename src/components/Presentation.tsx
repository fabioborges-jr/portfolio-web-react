import Github from "../assets/Github.svg"
import Cellphone from "../assets/Telephone.svg"
import Email from "../assets/mail.svg"
import Location from "../assets/location-outline.svg"
import LinkedIn from "../assets/Linkedin.svg"

function Presentation() {
    return (
        <div className="container mx-auto flex flex-row justify-between border-2">
            <div className="w-2/5">
                <p className="font-serif text-lg text-gray-400">MY NAME IS</p><br />
                <p className="font-bold text-3xl">Nicolas Montoro Rodrigues.</p><br />
                <p className="text-lg">Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX.</p><br />
                
                <table>
                    <thead>
                        <tr>
                            <th className="pr-8">
                                <img src={Github} alt="Github"></img>
                            </th>
                            <th className="pr-8">
                                <img src={LinkedIn} alt="LinkedIn"></img>
                            </th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img className="pt-4" src={Cellphone} alt="Cellphone"></img>
                            </td>
                            <td className="pt-3">(XX) XXXXX-XXXX</td>                          
                        </tr>
                        <tr>
                            <td>
                                <img className="pt-4" src={Email} alt="Email"></img>
                            </td>
                            <td className="pt-3">tilapia@gmail.com</td>                          
                        </tr>
                        <tr>
                            <td>
                                <img className="pt-4" src={Location} alt="Location"></img>
                            </td>
                            <td className="pt-3">Location</td>                          
                        </tr>                        
                        
                    </tbody>                    
                </table>
                                
            </div>
            <div className="w-2/5">
                <img src="https://engepesca.com.br/uploads/imagens/800x600_tilapia-pesquisadores-descobrem-na-composicao-creatina-taurina-e-glutamato-249-7424.jpg" alt="logo"></img>
            </div>
        </div>
    )
}

export default Presentation