import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {validateEmail} from '../helper';
import {useAuth} from '../context/AuthContext';
const SignUpPage = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [passwordConfirm, onChangePasswordConfirm] = useState('');
  const [status, setStatus] = useState('');
  const {signUp} = useAuth();

  async function doRegister() {
    if (email.length <= 0) {
      Alert.alert('Please enter a username');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Please enter a valid email');
      return;
    }
    if (password.length <= 0) {
      Alert.alert('Please enter a password');
      return;
    }

    if (password !== passwordConfirm) {
      Alert.alert('Password and Confirm password do not match!');
      return;
    }

    setStatus('Registering ..');

    const {error} = await signUp(email, password);

    if (error) {
      setStatus('There was a problem registering');
    } else {
      navigation.goBack();
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topBox}>
        <View style={styles.inputBoxWrapper}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            textContentType="newPassword"
            secureTextEntry={true}
          />

          <Text>Confirm Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePasswordConfirm}
            value={passwordConfirm}
            placeholder="Password"
            textContentType="newPassword"
            secureTextEntry={true}
          />
          <Text>{status}</Text>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            doRegister();
          }}>
          <Text style={styles.buttonFont}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.buttonFont}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topBox: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomBox: {
    flex: 2,
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
    marginBottom: 2,
  },
  buttonFont: {
    color: 'white',
  },
  inputBoxWrapper: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '100%',
    padding: 10,
  },
});

export default SignUpPage;
