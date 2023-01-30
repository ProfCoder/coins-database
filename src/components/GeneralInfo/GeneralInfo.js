import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { Outlet } from 'react-router';
import { SET_SEARCH } from '../../redux/actions';
import './GeneralInfo.css';

function GeneralInfo(){
    const coins = useSelector(store => store.coins);

    const dispatch = useDispatch();

    const handleCategory = (category) => () => {
        {dispatch(SET_SEARCH(coins.filter(category_coin => category_coin.category === category)))}
    }
        return ( 
            <div className='categories'>
                <div onClick={handleCategory('Bullion coins')} className='category'>
                    <h2 className='category-name'>Bullion coins</h2>
                    <Link className='category-url' to='/Bullion'> 
                        <p className='show-all'> Show all &#62;</p>
                        <img className='category-image' src="../images/SouthVietnameseDong_1.png" alt="Bullion" />
                    </Link>
                    <Outlet />
                </div>
                <div onClick={handleCategory('Exclusive coins')} className='category'>
                    <h2 className='category-name'>Exclusive coins</h2>
                    <Link className='category-url' to='/Exclusive'> 
                        <p className='show-all'> Show all &#62;</p>
                        <img className='category-image' src="../images/ISK_2.png" alt="Exclusive" />
                    </Link>
                    <Outlet />
                </div>
                <div onClick={handleCategory('Commemorative coins')} className='category'>
                    <h2 className='category-name'>Commemorative coins</h2>
                    <Link className='category-url' to='/Commemorative'> 
                        <p className='show-all'> Show all &#62;</p>
                        <img className='category-image' src="../images/Looney_1.png" alt="Commemorative" />
                    </Link>
                    <Outlet />
                </div>
            </div>
        );
}
 
export default GeneralInfo;