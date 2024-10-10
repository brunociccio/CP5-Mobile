import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PreferenciasContext = createContext();

export const usarTema = () => useContext(PreferenciaTemaContext);

export const TemaProvider  = ({children}) => {
    const [temaDark, setTemaDark] = useState(false); 

    const mudarTema = async () => {
        const novoTema = !temaDark;
        setTemaDark(novoTema);
        await AsyncStorage.setItem('@tema', JSON.stringify(novoTema));
    }

    useEffect(() => {
        const carregarNovoTema = async () => {
            const temaSalvo = await AsyncStorage.getItem("@tema");
            if(temaSalvo){
                setTemaDark(JSON.parse(temaSalvo));
            }
        };
        carregarNovoTema();
    }, []);

    return
    (
        <PreferenciasContext.Provider value = {{ temaDark, mudarTema }}>
            {children}
        </PreferenciasContext.Provider>
    )
}