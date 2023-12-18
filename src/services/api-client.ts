import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
   params: {key:'327ceb23f0a24fb18a664cc5ecc2ffc4'}
})