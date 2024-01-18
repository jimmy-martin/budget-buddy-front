import axios, { AxiosInstance } from 'axios'

const baseUrl = 'http://localhost:8000/api'

const budgetAxios = axios.create({
    baseURL: baseUrl,
    timeout: 5000
})

/*

//!NEEDS WORK

Example request a mettre dans les views :

import budgetAxios from '../axios/budgetAxios.ts'

budgetAxios.get('/users').then(function (response){
    console.log('Response : ', response.data)
}).catch(function(error){
    console.error('Error :', error)
})

*/

export default budgetAxios