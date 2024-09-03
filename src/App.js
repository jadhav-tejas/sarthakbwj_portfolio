import { Route, Routes } from "react-router-dom";
import Navigation from "./Routes/navigation.component";
import Home from "./Routes/home.component";

const App = () => {
  return(
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}/>
      {/* <Route path="shop" element={<Shop />}/>
      <Route path="auth" element={<Authentication />}/> */}
    </Route>
  </Routes>
  );
};

export default App;
