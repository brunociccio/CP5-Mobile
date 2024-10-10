import { Button, View } from "react-native"
import LoginForm from "../components/LoginForm"

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <LoginForm />
      <Button title="Registre-se" onPress={() => navigation.navigate("Register")} />
    </View>
  )
}

export default LoginScreen