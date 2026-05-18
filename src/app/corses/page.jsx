import React from 'react';

const CorsesPage = async() => {
     const res =await fetch("http://localhost:8000/datadb")
    const data =await res.json()
    return (
        <div>
            <h1>
                {data.length}
                {/* {
                    data.map()
                } */}
            </h1>
        </div>
    );
};

export default CorsesPage;