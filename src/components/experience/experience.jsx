import "./experience.css";

function Experience() {
  return (
    <div className="body_experience">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="session1_experience">
              <div className="part1_experience">
                <h1>Experiências</h1>
              </div>
              <div className="part2_experience">
                <nav className="nav_experience">
                  <a href="" className="">
                    Digital House
                  </a>
                  <a href="" className="">   
                    Código Fonte TV
                  </a>
                  <a href="" className="">
                    Zuplae
                  </a>
                  <a href="" className="">
                    ContWeb
                  </a>
                  <a href="" className="">
                    CodeLab
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="session2_experience">
            <div className="part3_experience">
              <h4>Professor conteudista em Frontend</h4>
              <p>Nov 2021-Atual</p>
            </div>
            <div className="part5_experience">
              <p>Digital House</p>
            </div>
            <div className="part6_experience">
              <p>
                Trabalhei com instrutora conteudista em frontend na Digital
                House, o trabalho consistia em criar conteúdos para as aulas de
                especialização frontend. Alguns temas dos conteúdos realizados
                foram: React, Redux, TypeScript, Testes, GraphQL, Next.js, MUI,
                React Hook Form e styled-components.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
