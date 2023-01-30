import { useParams, Link } from 'react-router-dom';
import CoinItem from '../../components/CoinItem/CoinItem';
import './CoinsList.css';

function CoinsList(){
        const {category} = useParams();
        return ( 
            <>
                <div>
                    <h1 className="list-header">List of the coins</h1>
                    <div className='back-to-homepage'>
                        <Link className='homepage-url' to='/'>Homepage</Link>
                        <span> - List of the coins</span>
                    </div>
                    {/* category value transfer as initial value for advanced search box */}
                    <CoinItem category={category} /> 
                </div>

            </>
        );
}
 
export default CoinsList;