import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdvancedSearch from '../AdvancedSearch/AdvancedSearch';
import SearchBox from '../SearchBox/SearchBox';
import './CoinItem.css';

function CoinItem({category}) {
    const coins = useSelector(store => store.coins);
    const searchResult = useSelector(store => store.search);
    const comprehensiveSearch = useSelector(store => store.advancedSearch);
    category = category + ' coins'; // for comparing with categories from DB

        return (<div className='coin-wrapper'>
            <SearchBox />
            <AdvancedSearch initial_category={category} />
            { !searchResult.length  ?
            !category ? coins.map(coin => {
                return (
                <Link key={coin.id} className="coin-item-url" to={`/coin-details/${coin.id}`} >
                <div  className="coin-item-wrapper">
                    <div><img className='coin-image' src={`../images/${coin.coin_front_image}`} alt={coin.coin_front_image}/></div>
                    <div className='coin-description'>
                        <p className="coin-item-name">{coin.coin_name}</p>
                        <p className="coin-item-short-text">{coin.short_desct}</p>
                        <br />
                        <p className="coin-item-short-text">{coin.category}</p>
                        <p className="coin-item-short-text">{coin.country}</p>
                        <p className="coin-item-short-text">{coin.composition}</p>
                        <p className="coin-item-short-text">{coin.quality}</p>
                    </div>
                </div>
                </Link>)})  
                : 
                coins.filter(coins => coins.category === category).map(coin =>
                    {
                    return (
                    <Link key={coin.id} className="coin-item-url" to={`/coin-details/${coin.id}`} >
                    <div  className="coin-item-wrapper">
                        <div><img className='coin-image' src={`../images/${coin.coin_front_image}`} alt={coin.coin_front_image}/></div>
                        <div className='coin-description'>
                            <p className="coin-item-name">{coin.coin_name}</p>
                            <p className="coin-item-short-text">{coin.short_desct}</p>
                            <br />
                            <p className="coin-item-short-text">{coin.category}</p>
                            <p className="coin-item-short-text">{coin.country}</p>
                            <p className="coin-item-short-text">{coin.composition}</p>
                            <p className="coin-item-short-text">{coin.quality}</p>
                        </div>
                    </div>
                    </Link>)}) 
                :
                (comprehensiveSearch.length  ?
                    comprehensiveSearch.map(coin => {
                        return (
                        <Link key={coin.id} className="coin-item-url" to={`/coin-details/${coin.id}`} >
                        <div  className="coin-item-wrapper">
                            <div><img className='coin-image' src={`../images/${coin.coin_front_image}`} alt={coin.coin_front_image}/></div>
                            <div className='coin-description'>
                                <p className="coin-item-name">{coin.coin_name}</p>
                                <p className="coin-item-short-text">{coin.short_desct}</p>
                                <br />
                                <p className="coin-item-short-text">{coin.category}</p>
                                <p className="coin-item-short-text">{coin.country}</p>
                                <p className="coin-item-short-text">{coin.composition}</p>
                                <p className="coin-item-short-text">{coin.quality}</p>
                            </div>
                        </div>
                        </Link>)})  
                        :
                        searchResult.map(coin => {
                            return (
                            <Link key={coin.id} className="coin-item-url" to={`/coin-details/${coin.id}`} >
                            <div className="coin-item-wrapper">
                                <div><img className='coin-image' src={`../images/${coin.coin_front_image}`} alt={coin.coin_front_image}/></div>
                                <div className='coin-description'>
                                    <p className="coin-item-name">{coin.coin_name}</p>
                                    <p className="coin-item-short-text">{coin.short_desct}</p>
                                    <br />
                                    <p className="coin-item-short-text">{coin.category}</p>
                                    <p className="coin-item-short-text">{coin.country}</p>
                                    <p className="coin-item-short-text">{coin.composition}</p>
                                    <p className="coin-item-short-text">{coin.quality}</p>
                                </div>
                            </div>
                            </Link>)})  
                )
            }
        </div>)
}

export default CoinItem;