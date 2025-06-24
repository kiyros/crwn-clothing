import Home from "./routes/home/home.component";
import { Routes, Route, Navigate } from "react-router";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
      {/* <Route path="*" element={<Navigate to="/home" replace />}></Route> */}
      {/* <Route index element={<Home />} /> */}
    </Routes>
  );
};

export default App;
