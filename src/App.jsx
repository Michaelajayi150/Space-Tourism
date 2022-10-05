import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/sections";

function App() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <BrowserRouter>
      <div className="body">
        <Header classNaming={classNames} />
        <Main classNaming={classNames} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
