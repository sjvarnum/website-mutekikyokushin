import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import GoogleReviews from "./components/CallToAction/GoogleReviews";
import CallToAction from "./components/CallToAction/CallToAction";
import Karate from "./components/Karate/Karate";
import NewsEvents from "./components/NewsEvents/NewsEvents";
import RingWars from "./components/RingWars/RingWars";
import KidsProgram from "./components/KidsProgram/KidsProgram";
import WomensProgram from "./components/WomensProgram/WomensProgram";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KaratePage from "./pages/KaratePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Hero />
              <GoogleReviews />
              <CallToAction />
              <Karate />
              <NewsEvents />
              <RingWars />
              <KidsProgram />
              <WomensProgram />
              <ContactForm />
              <Footer />
            </>
          }
        />
        <Route path="/karate" element={<KaratePage />} />
      </Routes>
    </Router>
  );
}

export default App;
