import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#f5f5f5] overflow-hidden ">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
