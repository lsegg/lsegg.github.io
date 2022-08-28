import { BrowserRouter } from "react-router-dom";
import { HeaderLay } from "./shared/layouts/header/header.lay";
import { HomeScr } from "./screens/home/home.scr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderLay />
        <HomeScr />
      </BrowserRouter>
    </div>
  );
}

export default App;
