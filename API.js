import React, { useState, useEffect } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
// const Menu = fetch("https://fakestoreapi.com/products")
// .then((response)=>{
//     return response.json();
// }).then((data)=>
// console.log(data)
// );

// export default Menu;

const Product = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    return (
        <>
            <Navbar setFilter={setFilter} setLoading={setLoading} />
            <MenuCard setData={setData} />
        </>
    );
}


export default Product;

//   export default MenuData;