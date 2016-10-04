var axios = require('axios');

const OPEN_WEAHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=fb36908083a2abc1d964a40f6a769a4a&units=imperial';

module.exports = {
  getTemp: function(location){
    location = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEAHER_MAP_URL}&q=${location}`;

    function success(res){
      //since Open weather api is not standard error, we check manually
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }

    function failed(res){
      throw new Error(res.data.message);
    }

    return axios.get(requestUrl).then(success, failed);
  }
}
