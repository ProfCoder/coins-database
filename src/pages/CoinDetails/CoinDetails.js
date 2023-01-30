import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './CoinDetails.css';

function CoinDetails(){
        const coins = useSelector(store => store.coins);
        const {id} = useParams();

        let currentCoin = coins.find(item => item.id === Number(id)) || {}; 

        return (
        <div className='coin-details-wrapper'>
                <div className='coin-details-image'>
                        <div><img className='coin-details-image-front' src={`../images/${currentCoin.coin_front_image}`} alt={currentCoin.coin_front_image}/></div>
                        <div><img className='coin-details-image-reverse' src={`../images/${currentCoin.coin_reverse_image}`} alt={currentCoin.coin_reverse_image}/></div>
                </div>
                <div className='coin-details-info'>
                        <h2 className='coin-details-header'>{currentCoin.coin_name}</h2>
                        <p className='coin-details-text'>{currentCoin.coin_desc}</p>
    
                        <table>
                                {false &&  (<thead> <tr><td></td></tr></thead>)}
                                <tbody>
                                <tr>
                                        <td>Issuing Country</td>
                                        <td>{currentCoin.country}</td>
                                </tr>
                                <tr>
                                        <td>Composition</td>
                                        <td>{currentCoin.composition}</td>
                                </tr>
                                <tr>
                                        <td>Quality</td>
                                        <td>{currentCoin.quality}</td>
                                </tr>
                                <tr>
                                        <td>Denomination</td>
                                        <td>{currentCoin.denomination}</td>
                                </tr>
                                <tr>
                                        <td>Year</td>
                                        <td>{currentCoin.coin_year}</td>
                                </tr>
                                <tr>
                                        <td>Weight</td>
                                        <td>{currentCoin.weight}</td>
                                </tr>
                                <tr>
                                        <td>Price</td>
                                        <td>{currentCoin.price}$</td>
                                </tr>
                                </tbody>
                        </table>
                        <Link to='/:category'  className='coins-details-url'>Back to the list</Link>
                </div>
        </div>
        )        
}
 
export default CoinDetails;