import "./App.css";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
