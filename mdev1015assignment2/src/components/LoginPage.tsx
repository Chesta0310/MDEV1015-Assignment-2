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
import {useAuth} from '../context/AuthContext';
import {validateEmail} from '../helper';

const LoginPage = ({route, navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [status, setStatus] = useState('');
  const {signIn} = useAuth();

  async function doLogin() {
    if (email.length < 1) {
      Alert.alert('Please enter a username');
      return;
    }
    if (password.length < 1) {
      Alert.alert('Please enter a password');
      return;
    }
    if (validateEmail(email.length < 1)) {
      Alert.alert('Invalid email address');
    }

    setStatus('Authenticating ..');
    const {error} = await signIn(email, password);

    if (error) {
      setStatus('Invalid email or password');
    } else {
      navigation.goBack();
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topBox}>
        <View style={styles.inputBoxWrapper}>
          <Text>Please enter your login credentials</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
          />
          <Text>{status}</Text>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            doLogin();
          }}>
          <Text style={styles.buttonFont}>Login</Text>
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

export default LoginPage;
