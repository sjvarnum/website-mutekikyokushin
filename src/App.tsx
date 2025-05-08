import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import GoogleReviews from "./components/CallToAction/GoogleReviews";
import CallToAction from "./components/CallToAction/CallToAction";
import Karate from "./components/Karate/Karate";
import NewsEvents from "./components/NewsEvents/NewsEvents";
import KidsProgram from "./components/KidsProgram/KidsProgram";
import WomensProgram from "./components/WomensProgram/WomensProgram";

function App() {
  return (
    <>
      {/* Sticky Navigation Bar at the Top */}
      <Navigation />
      {/* Hero Section Below Navbar */}
      <Hero />
      <GoogleReviews />
      <CallToAction />
      <Karate />
      <NewsEvents />
      <KidsProgram />
      <WomensProgram />
      {/* Main Content Placeholder */}
      <main>
        <div className="container mt-5 pt-5">
          <h1>Welcome to Muteki Kyokushin</h1>
          <p>
            This is the starter template. Begin building your sections here!
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
