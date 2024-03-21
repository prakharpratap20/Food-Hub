import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImprovedSkills from "./components/improvedSkill";
import QuoteSection from "./components/QuoteSection";
import ChefSection from "./components/ChefSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImprovedSkills />
        <QuoteSection />
        <ChefSection />
      </div>
    </div>
  );
}

export default App;
