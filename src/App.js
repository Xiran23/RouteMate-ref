import './App.css';
import { Routes , Route,Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PagenotFound from "./pages/PagenotFound";
import ContactIn from "./components/ContactIn";
import ContactRs from "./components/ContactRs";
import ContactUs from "./pages/ContactUs";

// import { useNavigate } from 'react-router-dom';

function App() {
  return (

    <div className="App">
     <Header></Header>
      <Routes>

      <Route path="/" element={<Home/> }></Route>
      <Route path="products" element={<ProductList/>}></Route>
      <Route path="products/:id" element={<ProductDetails/>}></Route>

      <Route path='contact' element={<Contact/>}>
            <Route path='in' element={<ContactIn/>}></Route>
            <Route path='us' element={<ContactUs/>}></Route>
            <Route path='rs' element={<ContactRs/>}></Route>

      </Route>

      <Route path='/admin' element={<Navigate to="/"/>}></Route>

      <Route path='*' element={<PagenotFound/>}></Route>
      </Routes>

    <Footer></Footer>
    </div>
  );
}

export default App;
