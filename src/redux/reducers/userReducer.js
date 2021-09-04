import { formattedData } from '../../Util';
const initialState = {

}

const user = (prevState = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USER_LOAD':
            return Object.assign({}, prevState, {
                loading: true
            });
        case 'FETCH_USER_SUCCESS':
            let {finalData, filters} = formattedData(action.data.data); // to format the data
            return Object.assign({}, prevState, {
                loading: false,
                userData: finalData,
                filterData: filters
            });
        default:
            return prevState;
    };  
}
export default user;
