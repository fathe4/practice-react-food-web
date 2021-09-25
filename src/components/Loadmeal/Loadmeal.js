import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';

const LoadMeal = () => {
    const [meals, setMeal] = useState([])
    const [cart, setCart] = useState([])
    const [searchText, setSearchText] = useState([]);

    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
            .then(res => res.json())
            .then(data => { setMeal(data.meals); setSearchText(data.meals) })
    }, []);

    const handelAddToCart = (product) => {
        const allCartProducts = [...cart, product]
        setCart(allCartProducts)
    }


    const handleSearch = (event) => {
        const searchedText = event.target.value
        const searchedProduct = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchedText.toLowerCase()))
        setSearchText(searchedProduct);
    }

    // console.log(searchText);

    return (
        <div className='row'>
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">HUNGRY</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/#">Home</a>
                                </li>


                            </ul>
                            <form className="d-flex">
                                <input onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='col-md-8'>
                <h2>Meal Found: {meals.length}</h2>
                <div className="row row-cols-md-3 g-4">
                    {
                        searchText.map(meal => <Meal key={meal.idMeal} meal={meal} addToCart={handelAddToCart}></Meal>)
                    }
                </div>

            </div>
            <div className='col-md-4'>
                <h2>Cart</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default LoadMeal;