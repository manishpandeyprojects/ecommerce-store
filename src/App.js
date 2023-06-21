import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import Product from './components/Products/Products';
import SingleProduct from './components/SingleProduct/SingleProduct';
import AppContext from './utils/context';

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    )
}

export default App;
