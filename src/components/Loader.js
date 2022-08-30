import React from 'react';

//gif
import spinner from '../assest/gifs/Loading_icon.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="loading" />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;