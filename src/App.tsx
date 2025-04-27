import { HeaderLay } from "./shared/layouts/header/header.lay";
import { HomeScr } from "./screens/home/home.scr";
import { BlogScr } from "./screens/blog/blog.scr";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderLay />
      <Routes>
        <Route path="/" element={<HomeScr />} />
        <Route path="/blog" element={<BlogScr />} />
      </Routes>
    </div>
  );
}

export default App;
