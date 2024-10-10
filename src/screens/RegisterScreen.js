import { Button, Text, View } from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <View>
      <Text>Registro aqui</Text>
      <Button title="Volte para a tela de login" onPress={() => navigation.navigate("Login")} />
    </View>
  )
}