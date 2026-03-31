import Header from "./components/Header";
import Banner from "./components/Banner";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <Header />
      <Banner />
      <Skill />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
