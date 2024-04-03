import Github from "../assets/Github.svg"
import Cellphone from "../assets/telephone.svg"
import Email from "../assets/mail.svg"
import Location from "../assets/location-outline.svg"
import LinkedIn from "../assets/Linkedin.svg"

export default function Presentation() {
    return (
        <div className="m-0 p-0 box-border container mx-auto flex justify-between">
            <div className="w-2/5">
                <p className="font-serif text-lg text-gray-400">MY NAME IS</p><br />
                <p className="font-bold text-3xl">Nicolas Montoro Rodrigues.</p><br />
                <p className="text-lg">Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX.</p><br />
                
                <table className="w-full min-w-40 border-collapse">
                    <thead>
                        <tr>
                            <th>
                                <img src={Github} alt="Github"></img>
                            </th>
                            <th> 
                                <img src={LinkedIn} alt="LinkedIn"></img>                               
                            </th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={Cellphone} alt="Cellphone"></img>
                            </td>
                            <td>(XX) XXXXX-XXXX</td>                          
                        </tr>
                        <tr>
                            <td>
                                <img src={Email} alt="Email"></img>
                            </td>
                            <td>tilapia@gmail.com</td>                          
                        </tr>
                        <tr>
                            <td>
                                <img src={Location} alt="Location"></img>
                            </td>
                            <td>Location</td>                          
                        </tr>
                    </tbody>                    
                </table>
                                
            </div>
            <div className="w-2/5 min-w-96">
                <img src="https://engepesca.com.br/uploads/imagens/800x600_tilapia-pesquisadores-descobrem-na-composicao-creatina-taurina-e-glutamato-249-7424.jpg" alt="logo"></img>
            </div>
        </div>
    )
}
