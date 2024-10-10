import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProdutosContext = createContext();

export const useProdutos = () => useContext(ProdutosContext);

export const ProdutoProvider = ({children}) => {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        const loadProduto = async() => {
            const savedProduto = await AsyncStorage.getItem('@produto');
            if(savedProduto) setProduto(JSON.parse(savedProduto));
        }
        loadProduto();
    }, []);

    const addProduto = async (produto) => {
        const newProduto= {produto};
        const newProdutos = [...produto, newProduto];

        setCategoria(newProdutos);

        await AsyncStorage.setItem('@produto', JSON.stringify(newProdutos));
    };

    return (
        <ProdutoProvider.Provider value={{categoria, addCategoria}}>
            {children}
        </ProdutoProvider.Provider>
    )
}