import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_SEARCH } from '../../redux/actions';
import { Link } from 'react-router-dom';
import './CreateCoin.css';

function CreateCoin() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [shortDescr, setShortDescr] = useState('');
    const [longDescr, setLongDescr] = useState('');
    const [country, setCountry] = useState('');
    const [composition, setComposition] = useState('');
    const [denomination, setDenomination] = useState('');
    const [quality, setQuality] = useState('');
    const [year, setYear] = useState('');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState('');
    const [frontImage, setFrontImage] = useState('');
    const [reverseImage, setReverseImage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleShortDescr = (e) => {
        setShortDescr(e.target.value);
    }
    const handleLongDescr = (e) => {
        setLongDescr(e.target.value);
    }
    const handleCountry = (e) => {
        setCountry(e.target.value);
    }
    const handleComposition = (e) => {
        setComposition(e.target.value);
    }
    const handleQuality = (e) => {
        setQuality(e.target.value);
    }
    const handleYear = (e) => {
        setYear(e.target.value);
    }
    const handleWeight = (e) => {
        setWeight(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const handleFrontImage = (e) => {
        setFrontImage(e.target.value);
    }
    const handleReverseImage = (e) => {
        setReverseImage(e.target.value);
    }
    const handleDenomination = (e) => {
        setDenomination(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {category, name, shortDescr, longDescr, country, composition, quality, denomination, year:  Number(year), weight, price, frontImage, reverseImage};
        //  -------------  *  New Coin Creation   *   ------------- //  
        fetch('http://localhost:3004/coins', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
          dispatch(SET_SEARCH([]));
          navigate('/admin/coin-administration');
    }

        return (
            <div>
                <header className='admin-header'>Admin Panel</header>
                <form className='new-coin-wrapper' onSubmit={handleSubmit}>
                    <div className='first-column'>
                        <p>Category</p>
                        <input className="new-input"type="text" value={category} onChange={handleCategory} />
                        <p>Coin name</p>
                        <input className="new-input" type="text" value={name} onChange={handleName} />
                        <p>Year of issue</p>
                        <input className="new-input" type="number" value={year} onChange={handleYear} />
                        <p>Price</p>
                        <input className="new-input" type="text" value={price} onChange={handlePrice} />
                        <p>Country</p>
                        <input className="new-input" type="text" value={country} onChange={handleCountry} />
                        <p>Metal</p>
                        <input className="new-input" type="text"  value={composition} onChange={handleComposition} />
                    </div>
                    <div className='second-column'>
                        <p>Short description</p>
                        <textarea value={shortDescr} className="textarea" onChange={handleShortDescr}></textarea>
                        <p>Long description</p>
                        <textarea value={longDescr} className="textarea" onChange={handleLongDescr}></textarea>
                        <p>Quality of the coin</p>
                        <input className="new-input" type="text" value={quality} onChange={handleQuality}/>
                        <p>Weight</p>
                        <input className="new-input" type="text" value={weight} onChange={handleWeight}/>
                    </div>   
                    <div className='third-column'>
                        <p>Denomination</p>
                        <input className="new-input" type="text" value={denomination} onChange={handleDenomination}/>
                        <p>Link to observe image</p>
                        <input className="new-input" type="text" value={frontImage} onChange={handleFrontImage}/>
                        <p>Link to reverse image</p>
                        <input className="new-input" type="text" value={reverseImage} onChange={handleReverseImage}/>
                        <div className='new-coin-buttons-wrapper'>
                            <button className='new-coin-button'>Save</button>
                            <Link className="new-coin-cancel-button" to="/admin/coin-administration">Cancel</Link>
                        </div>
                    </div> 
                </form> 
            </div>
        );
}
 
export default CreateCoin;
