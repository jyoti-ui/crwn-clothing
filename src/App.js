import React from "react";
import "./App.scss";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth" element={<Authentication/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
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
