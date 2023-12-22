import axios from 'axios'

const getWeather = async (req,res) =>  {
const {city, date} = req.params
const apiKey = req.query.apiKey || process.env.OPENWEATHERMAP_API_KEY

if (!apiKey) {
    return res.status(400).json({ error: 'API key is missing' });
  }

try {
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&dt=${date}`)
    const weatherData = response.data
    res.json(weatherData)
}
catch(error) {
    console.error('Error fetching weather data:', error.message, error.response?.data)
    res.status(500).json({error: 'Internal server error'})
}
}

export default {getWeather}