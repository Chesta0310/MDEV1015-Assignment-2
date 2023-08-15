import React from 'react'
import { Text, View } from 'react-native'

function SignUpPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ textAlign: 'center' }}>
      SignUp Page
    </Text>
  </View>
  )
}

export default SignUpPage

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   Platform,
//   Image,
//   Button,
//   TouchableOpacity,
//   TextInput,
//   Alert,
// } from 'react-native';
// import {validateEmail} from '../helper';
// import {signUpUser} from '../services/api.service';
// const SignUpPage = ({navigation}) => {
//   const [username, onChangeUsername] = useState('');
//   const [password, onChangePassword] = useState('');
//   const [passwordConfirm, onChangePasswordConfirm] = useState('');
//   const [status, setStatus] = useState('');

//   async function doRegister() {
//     if (username.length <= 0) {
//       Alert.alert('Please enter a username');
//       return;
//     }

//     if (!validateEmail(username)) {
//       Alert.alert('Please enter a valid email');
//       return;
//     }
//     if (password.length <= 0) {
//       Alert.alert('Please enter a password');
//       return;
//     }

//     if (password !== passwordConfirm) {
//       Alert.alert('Please confirm password');
//       return;
//     }

//     setStatus('Registering ..');

//     signUpUser(username, password)
//       .then(() => {
//         console.log('User account created & signed in!');
//         Alert.alert('Success, please login');
//         navigation.goBack();
//       })
//       .catch(error => {
//         if (error.code === 'auth/email-already-in-use') {
//           console.log('That email address is already in use!');
//         }

//         if (error.code === 'auth/invalid-email') {
//           console.log('That email address is invalid!');
//         }

//         console.error(error);
//         Alert.alert(`${error}`);
//       });

//     return;
//   }

//   return (
//     <SafeAreaView style={styles.wrapper}>
//       <View style={styles.topBox}>
//         <View style={styles.inputBoxWrapper}>
//           <Text>Email</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangeUsername}
//             value={username}
//             placeholder="Username"
//             autoCorrect={false}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />

//           <Text>Password</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangePassword}
//             value={password}
//             placeholder="Password"
//           />

//           <Text>Confirm Password</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangePasswordConfirm}
//             value={passwordConfirm}
//             placeholder="Password"
//           />
//           <Text>{status}</Text>
//         </View>
//       </View>
//       <View style={styles.bottomBox}>
//         <TouchableOpacity
//           style={styles.buttonStyle}
//           onPress={() => {
//             doRegister();
//           }}>
//           <Text style={styles.buttonFont}>Register</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.buttonStyle}
//           onPress={() => {
//             navigation.goBack();
//           }}>
//           <Text style={styles.buttonFont}>Back</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//   },
//   topBox: {
//     flex: 3,
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
//   bottomBox: {
//     flex: 2,
//     padding: 10,
//   },
//   buttonStyle: {
//     backgroundColor: 'grey',
//     padding: 10,
//     alignItems: 'center',
//     marginBottom: 2,
//   },
//   buttonFont: {
//     color: 'white',
//   },
//   inputBoxWrapper: {
//     width: '100%',
//     padding: 20,
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     width: '100%',
//     padding: 10,
//   },
// });

// export default SignUpPage;