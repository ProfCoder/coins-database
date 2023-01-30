import { useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SET_ADVANCED_SEARCH, SET_SEARCH } from '../../redux/actions';
import './SearchBox.css';

// ---- 3 Step/Priority Search:
// - 1. search by coin name 
// - 2. search by short description
// - 3. search by long description
function searchMethods(coins,search) { // 1. search by coin name
    let seachResult = [];  
    coins.filter(searchedCoin => {
        if (searchedCoin.coin_name.toUpperCase().includes(search.toUpperCase())) {
            seachResult.push(searchedCoin);
        }
        return seachResult;
    });

    coins.map(searchedCoin => { // 2. search by short description
       if (searchedCoin.short_desct.toUpperCase().includes(search.toUpperCase()) && !seachResult.includes(searchedCoin)){
            seachResult.push(searchedCoin);
       }
       return  seachResult;
    });

    coins.map(searchedCoin => { // 3. search by long description
        if (searchedCoin.coin_desc.toUpperCase().includes(search.toUpperCase()) && !seachResult.includes(searchedCoin)){
             seachResult.push(searchedCoin);
        }
        return  seachResult;
     });
    return  seachResult;
}

function SearchBox() {
    const coins = useSelector(store => store.coins);
    const [search, setSearch] = useState('');
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length > 0) {
            setDisabled(false)
            let data = searchMethods(coins,search);
            dispatch(SET_SEARCH(data));
        } else {
            setDisabled(true)
            dispatch(SET_SEARCH(coins));
            dispatch(SET_ADVANCED_SEARCH([]));
        }  
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/${search}`);
    }
        return (
        <div>
            <div className="search-box">
                <form onSubmit={onSearchSubmit} className="search-box__form">
                    <label className="search-box__form-label">
                        Input Field
                        <input type="text" className="search-box__form-input" value={search} onChange={handleChange}/>
                    </label>
                    <button className="search-box__form-submit" disabled={disabled}> Search </button>
                </form>
            </div>
        </div>
        );
}

export default SearchBox;
