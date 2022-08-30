import axios from "axios"

const getCoins = async(currency) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
    return response.data
}

export { getCoins }