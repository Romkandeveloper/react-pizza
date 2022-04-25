import React from 'react';
import classNames from 'classnames';

export const Button = ({children, outline, cart}) => {
    return (
        <button className={classNames('button', {
            'button-outline': outline,
            'button--cart': cart,
        })}>
            {children}
        </button>
    )
}