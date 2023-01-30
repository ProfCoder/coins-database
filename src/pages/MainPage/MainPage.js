import './MainPage.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SET_SEARCH, SET_ADVANCED_SEARCH } from '../../redux/actions';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import AdvanceSearch from '../../components/AdvancedSearch/AdvancedSearch';
import GeneralInfo from '../../components/GeneralInfo/GeneralInfo';

function MainPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(SET_SEARCH([]));
        dispatch(SET_ADVANCED_SEARCH([]));
	},[]) 
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                            <SearchBox className="main-page__search-box"  />
                            <AdvanceSearch />
                    </section>
                    <GeneralInfo />
                </main>
            </div>
        );
}
 
export default MainPage;
