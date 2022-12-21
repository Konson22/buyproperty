import { Suspense, lazy } from 'react'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/footer';
import Navbar from './components/navbar/Navbar'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import propertiesSlice from './features/ProperiesSlice'
import ScrollToTop from './helpers/ScrollToTop'

const Main = lazy(() => import('./pages/main/Main'));
const BuyPage = lazy(() => import('./pages/buy/Buy'));
const RentPage = lazy(() => import('./pages/rent/Rent'));
const AgentsPage = lazy(() => import('./pages/agents/Agents'));
const Upload = lazy(() => import('./pages/forms/Upload'));
const DetailPage = lazy(() => import('./pages/property-detail/DetailPage'));

const store = configureStore({
  reducer:{
    properties:propertiesSlice
  }
});
function App() {

  return (
      <Provider store={store}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/buy' element={<BuyPage />} />
            <Route path='/rent' element={<RentPage />} />
            <Route path='/agents' element={<AgentsPage />} />
            <Route path='/detail/:propertyId' element={<DetailPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </Provider>
  );
}


export default App;
