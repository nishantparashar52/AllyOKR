import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/actions'
import { Filters } from '../Filters';
import { Modal } from '../Modal';
import { List } from '../List';
import './User.scss';

export default () => {
    const dispatch = useDispatch();
    const { userData, filterData, loading } = useSelector(state => state.user);
    const [getData, setData] = useState(userData);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    useEffect(() => {
        if(userData && userData.length > 0) setData(userData);
    }, [userData]);

    const getFilters = filterName => {
        const targetValue = filterName.target.dataset.value;
        setData(filterData[targetValue]);
    }

    const toggleData = e => {
        const className = e.target.classList;
        if(className.contains('parent')) {
            if(className.contains('toggle')) className.remove('toggle');
            else className.add('toggle');
        }
    }

    const showModal = e => {
        setModalData(JSON.parse(e.target.dataset.value));
    }
    return (
    <div>
        {loading ?
        <svg class="svgLoader" viewBox="0 0 1024 1024" width="10em" height="10em">
            <path fill="lightblue" d="PATH FOR THE LOADER ICON" />
        </svg> :
        <>
            {filterData && Object.keys(filterData).length > 0 &&
            <Filters filterData={filterData} getFilters={getFilters}/>}
            {modalData && <Modal data={modalData} closeModal={() => setModalData(false)}/>}
            {getData && getData.length > 0 && <List getData={getData} toggleData={toggleData} showModal={showModal} />}
        </>
        }
    </div>
    );
};