import React, {useCallback, useState} from 'react';

export const Categories = ({categories}) => {

    const [activeItem, setActiveItem] = useState(null);

    //callback shouldn`t use
    const onSelectItem = useCallback(index => {
        setActiveItem(index)
    },[]);

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={()=>onSelectItem(null)}
                >
                    Все
                </li>
                {
                    categories &&
                    categories.map((item, index) => (
                        <li className={activeItem === index ? 'active' : ''}
                            key={`${item}_${index}`}
                            onClick={()=>onSelectItem(index)}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}