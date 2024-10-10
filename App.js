import { useContext } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import DashboardScreen2 from './src/screens/DashboardScreen2';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tema, usarTema } from './src/context/PreferenciasContext';

const Stack = createNativeStackNavigator()

const AppStack = () => {
  const { user } = useContext(AuthContext)
  const { temaDark, mudarTema } = usarTema();

  

  return (
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
  )
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </AuthProvider>
  );
}