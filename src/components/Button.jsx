import React from 'react';
import classNames from 'classnames';

export const Button = ({children, outline, cart, load, className}) => {

    return (
        <button className={classNames('button', {
            'button--outline': outline,
            'button--cart': cart,
            'button--load': load,
        })}>
            {children}
        </button>
    )
}