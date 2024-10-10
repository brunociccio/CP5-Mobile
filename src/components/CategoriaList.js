import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { usarTema } from '../context/PreferenciasContext';

const CategoriaList = () => {
    const {categoria} = useCategoria();
    const { temaDark } = usarTema();

    return (
        <FlatList
          data={categoria}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Text style={{color: temaDark ? '#fff' : '#000',}}>{item.produto}</Text>
            </View>
          )}
        />
      );
}