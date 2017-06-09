import React from 'react';

const FilterBar = (props) => {
    return (
        <div className="filter">
            <ul className="filter__list">
                {
                    Object.keys(props.filters).map((filterKey, i) => {
                        let val = props.filters[filterKey];

                        return (
                           <li
                               key={i}>
                               <a
                                   href="#"
                                   className={"filter__item" + (i === 0 ? ' active' : '')}
                                   onClick={(e) => {
                                       e.preventDefault();
                                       props.changeFilter(e, val)
                                   }}>
                                   {filterKey}
                               </a>
                           </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default FilterBar;
