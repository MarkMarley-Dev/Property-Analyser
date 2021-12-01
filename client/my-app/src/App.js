import "./App.css";
import PageHeader from "./Components /PageHeader/PageHeader";
import Hero from "./Components /Hero/Hero";
import Services from "./Components /ServicesComponent/ServicesComponent";
import Footer from "./Components /Footer/Footer";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
