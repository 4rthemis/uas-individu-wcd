import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { PortfolioTemplate } from "./components/templates/PortfolioTemplate";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, 
      easing: 'ease-in-out',
    });
  }, []);

  return <PortfolioTemplate />;
}

export default App;
