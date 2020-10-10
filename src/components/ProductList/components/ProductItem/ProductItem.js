//Packages
import React, {useState} from 'react';
import classNames from 'classnames';

//Styles
import './ProductItem.sass';


function ProductItem({product}) {
    const [inCart, changeInCart] = useState(false);
    const [isHover, setHover] = useState(false);

    const clickHandler = () => {
        if (product.count) {
            changeInCart(oldInCart => !oldInCart);
            setHover(false);
        }
    }
    const getBottomBlock = () => {
        if (product.count) {
            return inCart ? <div className={'product-item__bottom-text'}>{product.text}</div>
                : <div className={'product-item__bottom-text'}>
                    Чего сидишь? Порадуй котэ, <button className={'link'} onClick={changeInCart}>купи.</button>
                </div>
        } else {
            return <div
                className={'product-item__bottom-text text_yellow'}>{`Печалька, ${product.tasty} закончился.`}</div>
        }
    }

    const productWrapperClass = classNames({
        'product-item__wrapper': true,
        'product-item__wrapper_hover': isHover,
        'product-item__wrapper_pink': inCart,
        'product-item__wrapper_disable': !product.count
    });


    return (
        <div
            className={productWrapperClass}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div
                className="product-item"
                onClick={clickHandler}
                style={{backgroundImage: `url(./img/${product.img})`}}
            >
                <div className="product-item__info">
                    {isHover && inCart ?
                        <div className="product-item__top-text text_pink">Котэ не одобряет?</div>
                        : <div className="product-item__top-text">{product.category}</div>
                    }
                    <div className="product-item__h">{product.brand}</div>
                    <div className="product-item__h_small">{product.tasty}</div>
                    <div className="product-item__desc">{product.description}</div>
                    <div className="product-item__circle">{product.weight}</div>
                </div>
            </div>
            {getBottomBlock()}
        </div>
    )
}

export default ProductItem;
