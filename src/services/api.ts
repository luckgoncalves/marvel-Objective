import axios from 'axios';


const url = 'http://gateway.marvel.com'
const key = 'a08dd6249d736a2a1ad4bd7474e981bc'

export const api_marvel = { 

    get_personagems: async function (payload: string) {
        try {
            return await axios.get(`${url}/v1/public/characters${payload}&apikey=${key}`)
        } catch (error) {
            
        }
    }
}