export const formattedData = data => {
    let finalData = []; // to get the list data
    let filters = {}; // to get the filtered data
    for(let i = 0; i < data.length; i++) {
        const dataIndex = data[i];
        const parentLength = finalData.length - 1;
        if(dataIndex.parent_objective_id === '') {
            finalData.push(dataIndex);
            if(!filters[dataIndex.category]) filters[dataIndex.category] = [dataIndex];
            else filters[dataIndex.category].push(dataIndex);
        } else {
            if(finalData[parentLength]["children"]) finalData[parentLength]["children"].push(dataIndex);
            else finalData[parentLength]["children"] = [dataIndex];
        }
    }
    return { finalData, filters};
}

/* Why I thought of using two data 
1. finalData will have all the data in tree format to show the accordion
and children inside it.

2. FilterData is used to get the data under filters;
ex: {"Marketing": [], Sales: [], ...} keys will be used as a filters
Keys are the category
*/
