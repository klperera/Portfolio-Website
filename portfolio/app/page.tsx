import Header from "./components/Header";
import Hero from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
