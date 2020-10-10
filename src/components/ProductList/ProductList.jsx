//Packages
import React from 'react';

//Components
import ProductItem from "./components/ProductItem/ProductItem";

//Styles
import './ProductList.sass';


const MOCK_DATA = [
    {
        id: 1,
        category: 'Сказочное заморское яство',
        brand: 'Нямушка',
        tasty: 'с фуа-гра',
        description: '10 порций мышь в подарок',
        text: 'Печень утки разварная с артишоками.',
        img: 'cat.png',
        weight: '0,5',
        count: 5
    },
    {
        id: 2,
        category: 'Сказочное заморское яство',
        brand: 'Нямушка',
        tasty: 'с фуа-гра',
        description: '10 порций мышь в подарок',
        text: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        img: 'cat.png',
        weight: '2',
        count: 5
    }, {
        id: 3,
        category: 'Сказочное заморское яство',
        brand: 'Нямушка',
        tasty: 'с курой',
        description: '100 порций 5 мышей в подарок заказчик доволен',
        text: 'Филе из цыплят с трюфелями в бульоне.',
        img: 'cat.png',
        weight: '5',
        count: 0
    }]

function ProductList() {

    if (!MOCK_DATA.length) return null;

    return (
        <div>
            <h1 className="h1 mb-1">Ты сегодня покормил кота?</h1>
            <div className="products__container">

                {MOCK_DATA.length ? MOCK_DATA.map(product =>
                        <ProductItem
                            key={product.id}
                            product={product}/>)
                    : 'Еды нет (:'}
            </div>
        </div>
    );
}

export default ProductList;
