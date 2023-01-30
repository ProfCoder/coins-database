import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SET_COINS } from '../../redux/actions';
import SearchBox from '../../components/SearchBox/SearchBox';
import './CoinAdministration.css';

function CoinAdministration() {
    const coins = useSelector(store => store.coins);
    const search = useSelector(store => store.search);
    const [update, setUpdate] = useState(false);
    const dispatch = useDispatch();

	useEffect(() => {
		fetch('http://localhost:3004/coins')
		.then(response => response.json())
		.then(data => {
            dispatch(SET_COINS(data));
		})
	},[update]) 
    //  -------------  *  Deletion of selected coin   *   ------------- //
    const handleDelete = (id) => () => {
        setUpdate(!update);
        fetch(`http://localhost:3004/coins/${id}`, {
            method: 'DELETE'})
        }

        return (
            <div className="admin-wrapper">
                <header className='admin-header'>Admin Panel</header>
                <main>
                    <SearchBox />
                    {search.length ? search.map(coin => {
                return (
                <div  className="admin-coin-item-wrapper">
                        <div className='coin-admin-image'><img className='coin-image' src={`../images/${coin.coin_front_image}`} alt={coin.coin_front_image}/></div>
                        <div className='coin-description'>
                            <p className="coin-item-name">{coin.coin_name}</p>
                            <p className="coin-item-short-text">{coin.short_desct}</p>
                        </div>
                        <div className='coin-buttons-wrapper'>
                            <button className='button-delete' onClick={handleDelete(coin.id)}>Delete</button>
                            <Link className='button-edit' to={`/admin/edit/${coin.id}`}>Edit</Link>
                        </div>
                    </div>)})
                    : 
                    coins.map(coin => {
                        return (
                        <div  className="admin-coin-item-wrapper">
                                <div className='coin-admin-image'><img className='coin-image' src={`../images/${coin.coin_front_image}`} alt={coin.coin_front_image}/></div>
                                <div className='coin-description'>
                                    <p className="coin-item-name">{coin.coin_name}</p>
                                    <p className="coin-item-short-text">{coin.short_desct}</p>
                                </div>
                                <div className='coin-buttons-wrapper'>
                                    <Link className='button-edit' to={`/admin/edit/${coin.id}`}>Edit</Link>
                                    <button className='button-delete' onClick={handleDelete(coin.id)}>Delete</button>
                                </div>
                            </div>)})       
                    } 
                    <Link className='add-coin-wrapper' to='/admin/create'>
                        <div className='add-new-coin'>+</div>
                        <div className='add-new-coin-text'>Add a new coin</div>
                    </Link>
                </main>
            </div>
        );
}
 
export default CoinAdministration;
