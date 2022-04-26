import './styles/app.scss';
import {Header} from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from './pages/HomePage';
import {CartPage} from './pages/CartPage';

function App() {
  return (
        <BrowserRouter>
            <div class="wrapper">
              <Header />

              <div class="content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/checkout" element={<CartPage />} />
                </Routes>
              </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
