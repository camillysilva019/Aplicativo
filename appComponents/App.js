import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

const logo = require('./assets/pinterestlogo.png')

export default function App() {
  return (
    <View style={styles.container}>

      <Image source={logo} style={{ width: 100, margin: 20, height: 100, borderRadius: 20, alignItems: 'center', justifyContent: 'center', padding: 20 }}></Image>
      <Text style={{ color: 'white' , margin: 20 }}>Informe sues dados para acessar o sistema!</Text>

      <View>
        <Text style={styles.labelInput}>Usuário</Text>
        <TextInput placeholder='Guilherme de Medeiros' style={styles.input}></TextInput>

        <Text style={styles.labelInput}>Senha</Text>
        <TextInput placeholder='*****' style={styles.input}></TextInput>

      </View>

      <StatusBar style="auto" />

      <View style={[styles.botao]}>
        <Button title='Cadastrar' color='red' onPress={() => Alert.alert('Seja bem vindo ao seu perfil!')}></Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1F1F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 200,
    height: 100,
    margin:5
  },
  labelInput: {
    color: 'white',
    fontSize: 20,
    margin: 2
  },
  input: {
    width: 200,
    height: 40,
    margin: 7,
    padding: 10,
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: '#F0F8FF',
  },
});
