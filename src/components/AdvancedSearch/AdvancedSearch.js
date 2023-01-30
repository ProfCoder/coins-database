import { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { SET_SEARCH, SET_ADVANCED_SEARCH } from '../../redux/actions';
import './AdvancedSearch.css';

function AdvancedSearch({initial_category}){
    const coins = useSelector(store => store.coins);
    const search = useSelector(store => store.search);
    const comprehensiveSearch = useSelector(store => store.advancedSearch);
    const [advancedSearch, setAdvancedSearch] = useState(false);
    const dispatch = useDispatch();  

    const handleAdvancedSearch = () => {
        setAdvancedSearch(!advancedSearch);   
    }

    // ----------- Search by Category ----------- //
    const onCategoryChange = (e) => {
        let categorySelected = []; 
        if (!search.length ) { // search through all coins (without initial search)
             categorySelected = coins.filter(search_item => search_item.category === e.target.value);
             dispatch(SET_SEARCH(coins.filter(categorySelected))); 
        } else  { // search in already narrowed data
            categorySelected = search.filter(search_item => search_item.category === e.target.value);
            dispatch(SET_ADVANCED_SEARCH(categorySelected));
        }
    }
    // ----------- Search by Country ----------- //
    const onCountryChangeHandler = (e) => {
        let selectedByCountry = [];
        if (!search.length) { // search through all coins (without initial search)
            selectedByCountry = coins.filter(item => item.country === e.target.value);
            dispatch(SET_SEARCH(selectedByCountry)); 
        } else if (search.length && !comprehensiveSearch.length) { // search in already narrowed data
            selectedByCountry = search.filter(item => item.country === e.target.value)
            dispatch(SET_ADVANCED_SEARCH(selectedByCountry)); 
        } else if (comprehensiveSearch.length) { // search in already deep narrowed data
            selectedByCountry = comprehensiveSearch.filter(item => item.country === e.target.value)
            dispatch(SET_ADVANCED_SEARCH(selectedByCountry)); 
        }
    }
    // ----------- Search by Composition/Metal ----------- //
    const onMetalChangeHandler = (e) => {
        let selectedByMetal = [];
        if (!search.length) {  // search through all coins (without initial search)
            selectedByMetal = coins.filter(item => item.composition === e.target.value);
            dispatch(SET_SEARCH(selectedByMetal)); 
        } else if (search.length && !comprehensiveSearch.length) { // search in already narrowed data
            selectedByMetal = search.filter(item => item.composition === e.target.value)
            dispatch(SET_ADVANCED_SEARCH(selectedByMetal)); 
        } else if (comprehensiveSearch.length) { // search in already deep narrowed data
            selectedByMetal = comprehensiveSearch.filter(item => item.composition === e.target.value)
            dispatch(SET_ADVANCED_SEARCH(selectedByMetal));        
        }
    }
    // ----------- Search by Quality ----------- //
    const onQualityChangeHandler = (e) => {
        let selectedByQuality = [];
        if (!search.length) {  // search through all coins (without initial search)
            selectedByQuality = coins.filter(item => item.quality === e.target.value);
            dispatch(SET_SEARCH(selectedByQuality)); 
        } else if (search.length && !comprehensiveSearch.length) { // search in already narrowed data
            selectedByQuality = search.filter(item => item.quality === e.target.value)
            dispatch(SET_ADVANCED_SEARCH(selectedByQuality)); 
        } else {
            selectedByQuality = comprehensiveSearch.filter(item => item.quality === e.target.value)
            dispatch(SET_ADVANCED_SEARCH(selectedByQuality)); // search in already deep narrowed data        
        }
    }
        return ( 
            <div >
                <div onClick={handleAdvancedSearch} className="advanced-filter">Advanced Filter
                    {/* ----- Handling up and down arrow in Advanced Search  ------ */}
                    {!advancedSearch ? (<span className='advanced-search-down'> v</span>) : (<span className='advanced-search-up'> &#9650;</span>) }
                </div>
                {advancedSearch  && 
                <div className='advanced-search'>
                    <div className='leftside-search'>
                    {/* ------- SELECTION BY CATEGORY  ------- */}
                    <label className='label'>Category</label>
                            <select className="drop-down-options" defaultValue={initial_category} onChange={onCategoryChange}>
                                {<option key={Date.now()}> - All -</option>}
                                { !search.length  ?
                                [...new Set(coins.map(item => item.category))].map(category => { // getting unique categories for drop-dow menu
                                 return <option key={category}>{category}</option>; 
                                })
                                : 
                                search.length && !comprehensiveSearch.length  ?     
                                [...new Set(search.map(item => item.category))].map(item2 => {
                                    return <option key={item2}>{item2}</option>; 
                                   })   
                                : 
                                [...new Set(comprehensiveSearch.map(item => item.category))].map(item2 => {
                                    return <option key={item2}>{item2}</option>; 
                                   })   
                                }
                            </select>          
                    {/* -------   SELECTION BY COUNTRY  -------  */}
                        <label className='label'>Issuing country</label>
                            <select className="drop-down-options" onChange={onCountryChangeHandler}>
                                <option key={Date.now()}> - Reset Search -</option>
                                { !search.length ?
                                [...new Set(coins.map(item => item.category))].map(country => { // getting unique countries for drop-dow menu
                                return <option key={country.id}>{country.country}</option>; 
                                })
                                :
                                search.length && !comprehensiveSearch.length  ?

                                [...new Set(search.map(item => item.country))].map(item2 => {
                                    return <option key={item2}>{item2}</option>; 
                                   })     
                                :
                                [...new Set(comprehensiveSearch.map(item => item.country))].map(item2 => {
                                    return <option key={item2}>{item2}</option>; 
                                   })   
                                }
                            </select>
                    {/*  -------  SELECTION BY METAL/COMPOSITION  -------  */}
                        <label className='label'>Metal</label>
                            <select className="drop-down-options" onChange={onMetalChangeHandler}>
                                <option key={Date.now()}> - Reset Search -</option>
                                {!search.length ?
                                [...new Set(coins.map(item => item.composition))].map(composition => {  // getting unique composition for drop-dow menu
                                return <option key={composition.id}>{composition.composition}</option>;
                                 })
                                :
                                search.length && !comprehensiveSearch.length  ?
                                [...new Set(search.map(item => item.composition))].map(item2 => {
                                    return <option key={item2}>{item2}</option>; 
                                   })      
                                :   
                                [...new Set(comprehensiveSearch.map(item => item.composition))].map(item2 => {
                                    return <option key={item2}>{item2}</option>; 
                                   })     
                                }
                            </select>

                    {/*  -------  SELECTION BY QUALITY -------   */}
                        <label className='label'>Quality of the coin</label>
                            <select className="drop-down-options" onChange={onQualityChangeHandler}>
                                <option key={Date.now()}> - Reset Search -</option>
                                {!search.length ?
                                [...new Set(coins.map(item => item.quality))].map(quality => { // getting unique qulities for drop-dow menu
                                 return <option key={quality.id}>{quality.quality}</option>;
                                 })
                                :
                                search.length && !comprehensiveSearch.length  ?
                                [...new Set(search.map(item => item.quality))].map(item2 => {
                                    return <option key={item2}>{item2}</option>; 
                                   })      
                                :   
                                [...new Set(comprehensiveSearch.map(item => item.quality))].map(item2 => {
                                    return <option key={item2}>{item2}</option>; 
                                   }) 
                                }
                            </select>
                    </div>
                </div>
                }
            </div>
        );
}
 
export default AdvancedSearch;
