import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { SET_COINS } from './redux/actions';
import MainPage from './pages/MainPage/MainPage';
import CoinsList from './pages/CoinsList/CoinsList';
import CoinDetails from './pages/CoinDetails/CoinDetails';
import CoinAdministration from './admin/CoinAdministration/CoinAdministration';
import CreateCoin from './admin/CreateCoin/CreateCoin';
import EditCoin from './admin/EditCoin/EditCoin';
import Auth from './admin/auth/Auth';
import './reset.css';
import './common.css';

function App() {
  const dispatch = useDispatch();

	useEffect(() => {
		fetch('http://localhost:3004/coins')
		.then(response => response.json())
		.then(data => {
      dispatch(SET_COINS(data));
		})
	},[]) 

    return (
        <div className="app">
          <Routes>
              <Route path="/" exact element={<MainPage />} /> 
              <Route path="/:category" element={<CoinsList />} />
              <Route path="/coin-details/:id" element={<CoinDetails />} />
              <Route path="/admin" element={<Auth />} />
              <Route path="/admin/coin-administration" element={<CoinAdministration />} />
              <Route path="/admin/create" element={<CreateCoin />} />
              <Route path="/admin/edit/:id" element={<EditCoin />} />
          </Routes>
        </div>
    );
}

export default App;

