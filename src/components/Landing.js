import React, { useEffect, useState } from 'react';

//API
import { getCoins } from '../services/api';
import Coin from './Coin';

//components
import Loader from './Loader';

const Landing = () => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchAPI = async() => {
            setCoins(await getCoins("usd"))
            // to upgrade...y
        }

        fetchAPI()

    }, [])


    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <div>
                {
                    coins.length
                    ? <div className="flex flex-col items-center">        
                        <input 
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={searchHandler}
                            className="w-72 bg-black text-center mb-6 h-12 rounded-xl transition-all text-white hover:shadow-xl"
                        />
                        {
                            <div className="bg-slate-900 w-96 flex justify-center items-center flex-col py-8 rounded-lg">
                                {
                                    [...searchCoins].length
                                        ? searchCoins.map(coin => <Coin
                                            index={coins.findIndex(item => item === coin)}
                                            key={coin.id}
                                            name={coin.name}
                                            image={coin.image}
                                            symbol={coin.symbol}
                                            price={coin.current_price}
                                            marketCap={coin.market_cap}
                                            priceChange={coin.price_change_percentage_24h}
                                        />)
                                    : <h1 className="font-bold text-2xl text-white text-center">{search} Not Found!!</h1>
                                }
                            </div>
                        }
                        <h1 className="mt-10">Created by Alireza Tireh</h1>
                        <a className="w-fit p-2 h-10 rounded-md m-2 bg-blue-500 text-white " href="https://github.com/alireza844">Git hub</a>
                        <a className="w-fit p-2 h-10 rounded-md m-2 bg-blue-500 text-white mb-10" href="https://instagram.com/programmerAsli">Instagram</a>
                    </div>
                    : <Loader />
                }
            </div>
        </div>
    );
};

export default Landing;