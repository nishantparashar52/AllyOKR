import React from 'react';
import './Modal.scss';
export const Modal = ({ data, closeModal }) => {
    return (
        <div className="modal">
            <div className="modalContent">
                <div className="modalHeader">
                    <span onClick={closeModal} className="crossIcon"></span>
                </div>
                <div className="modalBody">
                    {Object.keys(data).map((item, index) => {
                        return (
                            <div key={index}><span className="title">{item}: </span>{data[item]}</div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}