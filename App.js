import { useContext } from 'react';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TemaProvider, usarTema } from './src/context/PreferenciasContext';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from './src/screens/DashboardScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import CategoriaScreen from './src/screens/CategoriaScreen';
import { ProdutoProvider } from './src/context/CategoriaContext';

const Stack = createNativeStackNavigator()

const AppStack = () => {
  const { user } = useContext(AuthContext)
  const { temaDark, mudarTema } = usarTema();

  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: temaDark ? '#333' : '#fff', padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <Text style={{ color: temaDark ? '#fff' : '#000', fontSize: 18 }}>Lista de Compras</Text>
        <Button title={temaDark ? 'Tema Claro' : 'Tema Escuro'} onPress={mudarTema} />
      </View>

      <Stack.Navigator>
        {user ? (
          <Stack.Screen name='Dashboard' component={DashboardScreen} />
        ) : (
          <>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Categoria' component={CategoriaScreen} />
          </>
        )}
      </Stack.Navigator>
    </SafeAreaView>
  )
} 

export default function App() {
  return (
    <TemaProvider>
      <AuthProvider>
        <ProdutoProvider>
          <NavigationContainer>
            <AppStack/>
          </NavigationContainer>
        </ProdutoProvider>
      </AuthProvider>
    </TemaProvider>
  );
}