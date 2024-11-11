import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Header } from "./Components/Header";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Products } from "./Pages/Producs";
import ShoppingCard from "./Pages/ShoppingCard";

function App() {
  console.log('aliyam');
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/card" element={<ShoppingCard />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
