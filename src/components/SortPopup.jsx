import React, {useEffect, useRef, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {setSort} from '../redux/actions/filters';

export const SortPopUp = () => {

    const {types, sort} = useSelector( state => ({
        types: ['популярности', 'цене', 'алфавиту'],
        sort: state.sort,
    }));

    const dispatch = useDispatch();

    const [visiblePopUp, setVisiblePopUp] = useState(false);
    const [activeItem, setActiveItem] = useState(0)
    const sortBlock = useRef();

    const handleOutsideClick = (e) => {
        if(!e.path.includes(sortBlock.current)) {
            setVisiblePopUp(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
    },[]);

    const changeActiveItem = (newActiveItem) => {
        setActiveItem(newActiveItem);
        setVisiblePopUp(false);
    }

    return (
        <div className="sort"
             ref={sortBlock}
        >
            <div className="sort__label"
                 onClick={()=>setVisiblePopUp(!visiblePopUp)}>
                <svg className={visiblePopUp ? 'active' : ''} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/>
                </svg>
                <b>Сортировка по:</b>
                <span>{types[activeItem]}</span>
            </div>

            {
                visiblePopUp &&
                <div className="sort__popup">
                    <ul>
                        {
                            types &&
                            types.map((item, index) => (
                                <li className={index === activeItem ? 'active' : ''}
                                    key={`${item}_${index}`}
                                    onClick={() => changeActiveItem(index)}
                                >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         types: ['популярности', 'цене', 'алфавиту'],
//         sort: state.sort
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setSortType: sortType => dispatch(setSort(sortType))
//     }
// }
//
// export const SortPopUpContainer = connect(mapStateToProps, mapDispatchToProps)(SortPopup);