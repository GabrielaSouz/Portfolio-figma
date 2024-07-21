import Header from "./../components/header/header";
import Brief from "./../components/brief/brief";
import AboutMe from "../components/About/AboutMe";
import Experience from "../components/experience/experience";
import Projects from "../components/projects/projects";
import Footer from "../components/footer/footer";
function Home() {
  return (
    <body>
      <main>
        <Header></Header>
        <Brief></Brief>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Projects></Projects>
        <Footer></Footer>
      </main>
    </body>
  );
}
export default Home;
