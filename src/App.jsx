import { BrowserRouter } from "react-router-dom";

import herobg from "./assets/herobg.png";
import {
  About,
  Experience,
  //Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Contact,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="relative bg-primary bg-cover bg-no-repeat bg-center min-h-screen"
          style={{ backgroundImage: `url(${herobg})` }}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />

        <div className="relative z-0">
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
