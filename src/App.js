// import react-router-dom here

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import List from "./pages/list/List.jsx";
import { productInputs, userInputs } from "./formSource.js";
import "./dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkMode.js";

function App() {
  const {darkMode}=useContext(DarkModeContext);
  return (
    <div className={darkMode ? "dark" :""}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title={"User Details Info"} />} />
            </Route>

            {/*product route here*/}

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New  inputs={productInputs} title={"Product Details Form"}/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
