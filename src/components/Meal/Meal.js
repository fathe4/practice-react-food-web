import React from 'react';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.meal

    return (
        <div>

            <div className="col">
                <div className="card h-100">
                    <img width='100px' src={strMealThumb} class="card-img-top" alt='' />
                    <div className="card-body">
                        <h5 className="card-title">{strMeal}</h5>
                        <p className="card-text">{strInstructions.slice(0, 300)}</p>
                    </div>
                    <div className="card-footer">
                        <button className='btn btn-dark' onClick={() => props.addToCart(props.meal)} >Add To Cart</button>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Meal;