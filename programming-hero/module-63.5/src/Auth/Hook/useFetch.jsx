import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (path) => {
    console.log(path)

    // state for all books
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        axios.get(`https://trackbook-server.vercel.app/${path}`)
        .then(res => setBooks(res.data))
    },[path])
    
    return {books}
};

export default useFetch;