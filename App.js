import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import duolingoLogo from './img/logo2.png';

const MyApp = () => {
  const [userInput, setUserInput] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleUserLogin = () => {
    Alert.alert('Inicio de sesión', `Usuario: ${userInput}\nContraseña: ${userPassword}`);
  };

  return (
    <View style={styles.container}>
      <Image source={duolingoLogo} style={styles.logoImage} />
      <Text style={styles.appTitle}>Duolingo</Text>
      <Text style={styles.subtitle}>What you sow today, you will reap tomorrow</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Nombre de usuario"
          onChangeText={(text) => setUserInput(text)}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setUserPassword(text)}
        />
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Olvidaste tu contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={handleUserLogin}>
          <Text style={styles.loginBtnText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <Text style={styles.createAccount}>Necesito crear una cuenta</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01071A',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ffff',
  },
  form: {
    width: '80%',
    marginBottom: 70,
    marginTop: 50,
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginBtn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 1,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  loginBtnText: {
    color: '#080505',
    fontWeight: 'bold',
    margin: 10,
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  subtitle: {
    fontSize: 17,
    marginBottom: 5,
    color: '#ffff',
  },
  label: {
    fontSize: 17,
    marginBottom: 5,
    color: '#ffff',
  },
  forgotPasswordContainer: {
    alignItems: 'center',
  },
  forgotPassword: {
    color: '#fff',
    marginTop: 5, 
  },
  createAccount: {
    color: '#fff',
    marginLeft: 100,
    marginTop: 5,
  },
});

export default MyApp;
