import Github from "../assets/Github.svg"
import Cellphone from "../assets/telephone.svg"
import Email from "../assets/mail.svg"
import Location from "../assets/location-outline.svg"
import LinkedIn from "../assets/Linkedin.svg"

export default function Presentation() {
    return (
        <div className="container mx-auto flex justify-between">
            <div className="w-2/5">
                <p className="font-serif text-lg text-gray-400">MY NAME IS</p><br />
                <p className="font-bold text-3xl">Nicolas Montoro Rodrigues.</p><br />
                <p className="text-lg">Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX.</p><br />
                
                <table className="w-full border-4">
                    <thead className="border-4">
                        <tr className="border-4">
                            <th>
                                <img src={Github}   alt="Github"></img>
                            </th>
                            <th>
                                <img src={LinkedIn} alt="LinkedIn"></img>
                            </th>                            
                        </tr>
                    </thead>
                    <tbody className="border-4">
                        <tr className="border-4">
                            <td>
                                <img src={Cellphone} alt="Cellphone"></img>
                            </td>
                            <td>(XX) XXXXX-XXXX</td>                          
                        </tr>
                        <tr className="border-4">
                            <td>
                                <img src={Email} alt="Email"></img>
                            </td>
                            <td>tilapia@gmail.com</td>                          
                        </tr>
                        <tr className="border-4">
                            <td>
                                <img src={Location} alt="Location"></img>
                            </td>
                            <td>Location</td>                          
                        </tr>
                    </tbody>                    
                </table>
                                
            </div>
            <div className="text-center w-2/5">
                <img src="https://engepesca.com.br/uploads/imagens/800x600_tilapia-pesquisadores-descobrem-na-composicao-creatina-taurina-e-glutamato-249-7424.jpg" alt="logo"></img>
            </div>
        </div>
    )
}
