import Github from "../assets/Github.svg"

function Presentation() {
    return (
        <div className="container mx-auto flex flex-row flex-wrap justify-between border-2">
            <div className="w-2/5">
                <p className="font-serif text-lg text-gray-400">MY NAME IS</p><br />
                <p className="font-bold text-3xl">Nicolas Montoro Rodrigues</p><br />
                <p className="text-lg">Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX</p><br />
                <img src={Github}></img>
            </div>
            <div className="w-2/5">
                <img
                    src="https://engepesca.com.br/uploads/imagens/800x600_tilapia-pesquisadores-descobrem-na-composicao-creatina-taurina-e-glutamato-249-7424.jpg"
                    alt="logo">
                </img>
            </div>
        </div>
    )
}

export default Presentation