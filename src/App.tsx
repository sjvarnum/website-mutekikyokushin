import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import GoogleReviews from "./components/CallToAction/GoogleReviews";
import CallToAction from "./components/CallToAction/CallToAction";
import Karate from "./components/Karate/Karate";
// import NewsEvents from "./components/NewsEvents/NewsEvents";
import RingWars from "./components/RingWars/RingWars";
import CarouselCards from "./components/CarouselCards";
import KidsProgram from "./components/KidsProgram/KidsProgram";
import WomensProgram from "./components/WomensProgram/WomensProgram";
import Schedule from "./components/Schedule/Schedule";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KaratePage from "./pages/KaratePage";
import KidsKaratePage from "./pages/KidsKaratePage";
import WomensKaratePage from "./pages/WomensKaratePage";
import ScrollToAnchor from "./components/ScrollToAnchor";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToAnchor />
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
              {/* <NewsEvents /> */}
              <RingWars />
              <CarouselCards
                items={[
                  {
                    id: 1,
                    title: "Ring Wars Tournament 2013",
                    description: "Join us for the annual Ring Wars tournament. Open to all ages and levels!",
                    image: "/src/assets/ringwars-2.jpg",
                    link: "#",
                    // date: "2013-06-01"
                  },
                  {
                    id: 2,
                    title: "Ring Wars Tournament 2013",
                    description: "Join us for the annual Ring Wars tournament. Open to all ages and levels!",
                    image: "/src/assets/ringwars-3.jpg",
                    link: "#",
                    // date: "2015-06-01"
                  },
                  {
                    id: 3,
                    title: "Ring Wars Tournament 2015",
                    description: "Join us for the annual Ring Wars tournament. Open to all ages and levels!",
                    image: "/src/assets/ringwars-4.jpg",
                    link: "#",
                    // date: "2017-06-01"
                  },
                  {
                    id: 4,
                    title: "Ring Wars Tournament 2020",
                    description: "Join us for the annual Ring Wars tournament. Open to all ages and levels!",
                    image: "/src/assets/ringwars-5.jpg",
                    link: "#",
                    // date: "2025-06-01"
                  }
                ]}
              />
              <KidsProgram />
              <WomensProgram />
              <Schedule />
              <ContactForm />
              <Footer />
            </>
          }
        />
        <Route path="/karate" element={<KaratePage />} />
        <Route path="/kids-karate" element={<KidsKaratePage />} />
        <Route path="/womens-karate" element={<WomensKaratePage />} />
      </Routes>
    </Router>
  );
}

export default App;
