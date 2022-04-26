import './styles/app.scss';
import {Header} from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePageContainer} from './pages/HomePage';
import {CartPage} from './pages/CartPage';

import {Provider} from 'react-redux';
import {store} from './redux/store';

function App() {
  return (
        <BrowserRouter>
            <Provider store={store}>
                <div class="wrapper">
                  <Header />

                  <div class="content">
                    <Routes>
                        <Route path="/" element={<HomePageContainer />} />
                        <Route path="/checkout" element={<CartPage />} />
                    </Routes>
                  </div>
                </div>
            </Provider>
        </BrowserRouter>
  );
}

export default App;
