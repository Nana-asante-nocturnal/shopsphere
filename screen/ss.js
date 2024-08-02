import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Alert, KeyboardAvoidingView, ScrollView, Linking } from 'react-native';

const BudgetScreen = () => {
  const [totalMoney, setTotalMoney] = useState('');
  const [dailySpending, setDailySpending] = useState('');
  const [remainingAmount, setRemainingAmount] = useState(null);

  const handleCompute = () => {
    if (totalMoney === '' || dailySpending === '') {
      Alert.alert('Please fill in both fields');
      return;
    }
    
    const total = parseFloat(totalMoney);
    const spending = parseFloat(dailySpending);
    
    if (isNaN(total) || isNaN(spending)) {
      Alert.alert('Please enter valid numbers');
      return;
    }

    const remaining = total - spending;
    setRemainingAmount(remaining);
  };

  const handleClear = () => {
    setTotalMoney('');
    setDailySpending('');
    setRemainingAmount(null);
  };

  const handleChatBot = () => {
    const url = 'https://shopsphere.zapier.app';
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.inner}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Budget Calculator</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter total amount of money"
              value={totalMoney}
              onChangeText={setTotalMoney}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter daily spending"
              value={dailySpending}
              onChangeText={setDailySpending}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handleCompute}>
              <Text style={styles.buttonText}>Budget!</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleClear}>
              <Text style={styles.buttonText}>Clear</Text>
            </Pressable>
          </View>

          {remainingAmount !== null && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>Remaining Amount: {remainingAmount}</Text>
            </View>
          )}

          <View style={styles.chatBotButtonContainer}>
            <Pressable style={styles.button} onPress={handleChatBot}>
              <Text style={styles.buttonText}>Chat with Our ChatBot!</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  chatBotButtonContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
});

export default BudgetScreen;
