import React, { createContext, useContext, useState, useEffect } from 'react';
import { useFetch } from '../util-hooks/useFetch';

const MyContext = createContext();

export const useInfo = () => useContext(MyContext)

export function MyProvider({ children }) {
    const {data} = useFetch({ url: "/data.json" })
    
    const [currentData, setCurrentData] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);

    useEffect(()=>{
        if (data && !isDataFetched) {
            setCurrentData(data);
            setIsDataFetched(true);
        }
    },[data, isDataFetched])

    return (
        <MyContext.Provider value={{ favorites, setFavorites, currentData, setCurrentData }}>
        {children}
        </MyContext.Provider>
    );
}