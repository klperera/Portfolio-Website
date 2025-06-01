import Header from "./components/Header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
