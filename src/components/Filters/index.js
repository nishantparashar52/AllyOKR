import React from 'react';
import './Filters.scss';

export const Filters = ({ filterData, getFilters }) => {
    return (
        <div className="filters" onClick={e => getFilters(e)}>
            {Object.keys(filterData).map((item, index) =>
                <div key={index} data-value={item}><input className="filterRadio" type="radio" id={item} name="filter_name" value={item} />
                  <label className="filterLabel" htmlFor={item} data-value={item}>{item}</label></div>
            )}
        </div>
    );
};