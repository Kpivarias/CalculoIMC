import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Result = ({ imc }) => {
  const numericIMC = parseFloat(imc);

  const getIMCStatus = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso ideal';
    if (imc < 29.9) return 'Acima do peso';
    if (imc < 34.9) return 'Obesidade grau 1';
    if (imc < 39.9) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Seu IMC é: {numericIMC.toFixed(2)}</Text>
      <Text style={styles.status}>{getIMCStatus(numericIMC)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    fontSize: 24,
    color: '#333',
  },
  status: {
    fontSize: 20,
    color: '#666',
    marginTop: 10,
  },
});

export default Result;