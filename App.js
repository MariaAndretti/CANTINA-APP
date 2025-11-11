import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [email, setEmail] = useState("mail#m");
  const [senha, setSenha] = useState("");
  return (
    <View style={styles.container}>
      <Text>Usuário: {email}</Text>
      <TextInput planaceholder='Digite o seu email'></TextInput>
      <Text>Senha</Text>
      <TextInput planaceholder='Digite sua senha'></TextInput>
      <Button title='Entrar'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
