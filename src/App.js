import React from "react";
import "./App.scss";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Signin from "./routes/sign-in/sign-in.component";
const Shop = () => {
  return <div>I am a shop page</div>;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<Signin/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

// <Navigation />
// <Routes>
//   <Route path="/home" element={<Home />}/>
//   <Route path="/home/shop" element={<Shop />} />
// </Routes>

// <Routes>
// <Route path="/" element={<Navigation />}>
//   <Route path="/home" element={<Home />}>
//     <Route path="shop" element={<Shop />} />
//   </Route>
// </Route>
// </Routes>
