import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Hero3 from "@/components/homes/home-10/heros/Hero3";
import Home from "@/components/homes/home";

export const metadata = {
  title:
    "Home 10 BG Video MultiPage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home10BGVideoMultiPageDark() {
  return (
    <>
      <div className="theme-strong">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
              <Header />
            </nav>
            <main id="main">
              <section
                className="home-section light-content scrollSpysection"
                id="home"
              >
                <Hero3 />
              </section>

              <Home dark />
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
