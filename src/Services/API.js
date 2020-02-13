const axios = require('axios');
const URL = "https://gtfs-mdc.herokuapp.com/";
const URLGetAllRoutes = "https://gtfs-mdc.herokuapp.com/routes/find/all";


const API = {
    getStatus: async function() {
        await axios.get(URL)
            .then(function (response) {
                // handle success
                // console.log(response);
                console.warn("Status of backend: " + JSON.stringify(response.data));
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    },
    getRoutes : async function() {
        let response = await axios.get(URLGetAllRoutes);
        console.log("This happened: ", response);
        return response.data;
    }
};

export default API;

