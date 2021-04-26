import config from './config';
import axios from 'axios';
var qs = require('qs');
const serverUrl = config.baseUrl;
if (typeof window !== 'undefined')
    if (window.localStorage.getItem('token') !== null) {
        axios.defaults.headers.common['Authorization'] =
            localStorage.getItem('token_type') +
            ' ' +
            localStorage.getItem('token');
        axios.defaults.headers.common['Content-Type'] =
            'application/x-www-form-urlencoded';
    }

const Network = {
    getToken: async () => {
        return new Promise((resolve, reject) => {
            var data = qs.stringify({
                grant_type: 'client_credentials',
            });
            axios({
                url: serverUrl + config.auth,
                method: 'post',
                data: data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Basic ' + btoa('mobile:pin'),
                },
            })
                .then((data) => {
                    console.log('data', data.data);
                    const authData = data.data;
                    localStorage.setItem('token', authData.access_token);
                    localStorage.setItem('token_type', authData.token_type);
                    axios.defaults.headers.common['Authorization'] =
                        localStorage.getItem('token_type') +
                        ' ' +
                        localStorage.getItem('token');
                    axios.defaults.headers.common['Content-Type'] =
                        'application/x-www-form-urlencoded';
                    return resolve(data);
                    // localStorage.setItem()
                })
                .catch((err) => reject(err));
        });
    },
    dashboardData: async () => {
        return new Promise((resolve, reject) => {
            var data = {
                channelId: 1,
                customerId: 1,
                language: 'ENG',
                userId: 2,
                latitude: '22.54410489419337',
                longitude: '88.35800126798115',
                storeId: 1,
            };
            axios({
                url: serverUrl + config.dashboardData,
                method: 'post',
                data: data,
                headers: { 
                    'Authorization': 'Bearer '+localStorage.getItem('token')+'', 
                    'Content-Type': 'application/json'
                  },
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    },
};

export default Network;
