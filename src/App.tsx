import { HeaderLay } from "./shared/layouts/header/header.lay";
import { HomeScr } from "./screens/home/home.scr";

function App() {
  return (
    <div className="App">
      <HeaderLay />
      <div className="App-section-container">
        <HomeScr />
      </div>
    </div>
  );
}

export default App;
