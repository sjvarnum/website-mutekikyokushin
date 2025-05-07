import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      {/* Sticky Navigation Bar at the Top */}
      <Navigation />
      {/* Hero Section Below Navbar */}
      <Hero />
      {/* Main Content Placeholder */}
      <main>
        <div className="container mt-5 pt-5">
          <h1>Welcome to Muteki Kyokushin</h1>
          <p>This is the starter template. Begin building your sections here!</p>
        </div>
      </main>
    </>
  );
}

export default App;