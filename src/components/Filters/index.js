import React from 'react';
import './Filters.scss';

export const Filters = ({ filterData, getFilters }) => {
    return (
        <div className="filters" onClick={e => getFilters(e)}>
            {Object.keys(filterData).map((item, index) =>
                <div key={index} className="filterList" data-value={item}>{item}</div>)
            }
        </div>
    );
};