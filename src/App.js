import { Route, Routes } from "react-router-dom";
import Navigation from "./Routes/navigation.component";
import Home from "./Routes/home.component";
import Footer from "./Components/footer.component";
import Yoga from "./Components/yoga.component";
import Permaculture from "./Components/permaculture.component";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="yoga" element={<Yoga />}/>
          <Route path="permaculture" element={<Permaculture />}/>
          {/* <Route path="shop" element={<Shop />}/> */}
          {/* <Route path="auth" element={<Authentication />}/> */}
        </Route>
      </Routes>
      <Footer /> {/* Place the Footer component here */}
    </div>
  );
};

export default App;
