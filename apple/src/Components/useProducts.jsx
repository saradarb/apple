import React, { useEffect, useState } from 'react';
import axios from 'axios'

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);



    const fetchCategories = async() => {
        const url = "http://localhost:1337/api/categories";
        try {
            const {data: {data},} = await axios.get(url);
            setCategories(data);
        } catch (error) {
            console.log(error)
        }
    };

    const FetchProducts = async() => {
        const url = "http://localhost:1337/api/products?populate=*";
        try {
           const {data: {data},} = await axios.get(url);
           setProducts(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategories();
        FetchProducts();
    }, []);




    return {
        categories,
        products,

    }
};

