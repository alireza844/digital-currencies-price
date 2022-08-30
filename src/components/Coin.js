import React from 'react';

const Coin = ({ name, image, symbol, price, marketCap, priceChange, index }) => {
    return (
        
    <>
        <div className="flex items-center w-80 m-1 p-3 bg-slate-400 rounded-lg transition-all hover:shadow-lg">
            <h1 className="w-4 text-xs">{index + 1}</h1>
            <img src={image} alt={name} className="w-6 mx-3" />
            <div className="flex justify-between items-center w-3/4">
                {/* need to add bottom elements styles */}
                <h1 className="">{name}</h1>
                <p className="">{symbol.toUpperCase()}</p>
                <p className="">{price.toLocaleString()}</p>
                <p className={!priceChange.toString().includes("-") ? "text-green-600" : "text-red-600"}>{priceChange}</p>
                <p className="sm:hidden md:block">{marketCap.toLocaleString()}</p>
            </div>
        </div>
    </>
    );
};

export default Coin;