import React, { useState } from 'react';
import { Alert, View, Image, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import imagem from './assets/form.png';

function App() {

  const [displayOff, setDisplayOff] = useState(true)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [texto, setTexto] = useState('')

  function handleDisplay() {
    setDisplayOff(!displayOff)
  }

  function handleInformation() {
    Alert.alert(`Obrigado ${nome}! Resposta cadastrada. ${texto}`)
  }

  return (
    <View style={styles.container}>
      
      {!displayOff ? null : <Image source={imagem} style={styles.image}/>}

      {!displayOff ? null : 
      <TouchableOpacity style={styles.button} onPress={handleDisplay}>
        <Text style={styles.buttonText}>CRIAR FORMULÁRIO</Text>
      </TouchableOpacity>}

      {displayOff ? null : <Image source={imagem} style={styles.image2}/>}

      {displayOff ? null : 
      <TextInput
        placeholder='Name'
        style={styles.input}
        value={nome}
        onChangeText={(text) => {setNome(text)}}
      />}

      {displayOff ? null : 
      <TextInput
        placeholder='E-mail'
        style={styles.input}
        value={email}
        onChangeText={(text) => {setEmail(text)}}
      />}

      {displayOff ? null : 
      <TextInput
        placeholder='Digite seu texto aqui...'
        style={styles.input2}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        value={texto}
        onChangeText={(text) => {setTexto(text)}}
      />}

      {displayOff ? null : 
      <TouchableOpacity style={styles.button} onPressIn={handleInformation} onPressOut={handleDisplay}>
        <Text style={styles.buttonText}>ENVIAR</Text>
      </TouchableOpacity>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#400601',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
    marginTop: 100,
  },
  image2: {
    width: 50,
    height: 50,
    marginBottom: 40,
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: '#F2B705',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 300,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    width: 300,
  },
  input2: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 250,
  },
});

export default App;
