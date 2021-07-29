import React from 'react';

const SearchResult=(props)=>{
    const image=`https://source.unsplash.com/400x300/?${props.name}`;
    return (
        <>
        <img src={image} alt="Image" className="image" />
        </>
    )
}

export default SearchResult;