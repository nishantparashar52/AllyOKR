import React from 'react';
import './List.scss';

export const List = ({getData, toggleData, showModal}) => {
    return (
        <>
        {getData.map((item, key) => {
            let childData = item.children;
            return (
            <div key={key} className="parent" onClick={toggleData}>{key + 1}. {item.title}
            <div className="children" onClick={showModal}>
            {childData && childData.map((item, index) => {
                return <div key={`${key}_${index}`} className={`childList ${index % 2 === 0 ? 'even' : ''}`} data-value={JSON.stringify(item)}>{key + 1}.{index + 1}. {item.title}</div>
            })}
            </div>
            </div>
            );
        })}
        </>
    );
}