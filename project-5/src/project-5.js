import "./project-5.css";
import Header from "./components/Header";
import MemeInput from "./components/MemeInput";

const App = () => (
  <div className="app">
    <Header />
    <section className="meme-section">
      <MemeInput />
    </section>
  </div>
);

export default App;
