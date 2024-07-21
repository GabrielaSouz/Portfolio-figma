import './brief.css'
import Imagem from './../../assets/imagem/avatar.png'
const url = "https://picsum.photos/400/400?random=1";

function Brief() {
  return (
    <div className="body_brief">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="part1_brief">
                <p>Apaixonada por café</p>
            </div>
            <div className="part2_brief">
                <p>Olá, eu sou</p>
            </div>
            <div className="part3_brief">
                <p>Gabriela de Souza</p>
            </div>
            <div className="part4_brief">
                <p>Desenvolvedora Frontend & UI Designer.</p>
            </div>
            <div className="part5_brief">
                <a className="lnkedin" href="https://www.linkedin.com/in/gabriela-de-souza-0a6847161/" target="blank">Linkedin</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="imagem">
          <img src={Imagem}></img>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Brief;
