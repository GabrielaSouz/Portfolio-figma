import "./header.css";
import './java'
function Header() {


  return (
    <body>
    <header class="header">
        <nav class="nav">
            <a href="/" class="logo">Gabriela de Souza</a>
            <button class="hamburger"></button>
                <ul class="nav-list">
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre mim</a></li>
                    <li><a href="#">Experiências</a></li>
                    <li><a href="#">Projetos</a></li>
                </ul>
            
        </nav>
    </header>
    
</body>
    
  );
}
export default Header;
