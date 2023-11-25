import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./templates/main/main";
import About from "./templates/about/about";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
