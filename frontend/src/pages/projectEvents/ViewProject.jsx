import React, { useEffect, useState } from 'react';

const ViewProject = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        const tempStore = localStorage.getItem('info');

        tempStore ? setData(JSON.parse(tempStore)) : setData([]);
    },[])

    return (
        <div>
            {data.length > 0 ? ( data.map((item)=>(
                <>
                    <p>title: {item.projectName}</p>
                    <p>description: {item.description}</p>
                    <p>startDate: {item.startDate}</p>
                    <p>endDate: {item.endDate}</p>
                </>
            ))) : (
                <p>no data</p>
            )}
        </div>
    );
};

export default ViewProject;