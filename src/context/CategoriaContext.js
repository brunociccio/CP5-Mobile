import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CategoriaContext = createContext();

export const useCategoria = () => useContext(CategoriaContext);

export const CategoriaProvider = ({children}) => {
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        const loadCategoria = async() => {
            const savedCategoria = await AsyncStorage.getItem('@categoria');
            if(savedCategoria) setCategoria(JSON.parse(savedCategoria));
        }
        loadCategoria();
    }, []);

    const addCategoria = async (categoria) => {
        const newCategoria = {categoria};
        const newCategorias = [...categoria, newCategoria];

        setCategoria(newCategorias);

        await AsyncStorage.setItem('@categoria', JSON.stringify(newProdutos));
    };

    const addProduto = async (produto, categoria) => {
        const categoria = categoria()
        const newCategoria = {}
    }

    return (
        <CategoriaContext.Provider value={{categoria, addCategoria}}>
            {children}
        </CategoriaContext.Provider>
    )
}