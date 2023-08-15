import React from 'react'
import { Text, View } from 'react-native'
function LoginPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ textAlign: 'center' }}>
      Login Page
    </Text>
  </View>
  )
}

export default LoginPage;

// import React, {useContext, useState} from 'react';
// import {
//   signUp,
//   signUpPr,
//   signInAsync,
//   fetchUser,
// } from '../services/api.service';
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
// import {sleep} from '../helper';
// import {AppStateContext, useAppData} from '../provider/AppState';

// const LoginPage = ({route, navigation}) => {
//   const [username, onChangeUsername] = useState('');
//   const [password, onChangePassword] = useState('');
//   const [status, setStatus] = useState('');
//   const {setActiveUser} = useAppData();

//   async function doLogin() {
//     if (username.length <= 0) {
//       Alert.alert('Please enter a username');
//       return;
//     }
//     if (password.length <= 0) {
//       Alert.alert('Please enter a password');
//       return;
//     }

//     setStatus('Authenticating ..');
//     signInAsync(username, password)
//       .then(userCred => {
//         console.log('Login success!:', userCred.user.uid);
//         loadUserProfile(userCred.user.uid);
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
//   }

//   async function loadUserProfile(userID: string) {
//     console.log('Loading user profile');
//     setStatus('Loading user profile ..');
//     const loadedUser = await fetchUser(userID);
//     if (!loadedUser) {
//       Alert.alert('Something went wrong');
//       return;
//     }
//     setActiveUser(loadedUser);
//     navigation.reset({
//       index: 0,
//       routes: [{name: 'AfterLogin'}],
//     });
//   }

//   return (
//     <SafeAreaView style={styles.wrapper}>
//       <View style={styles.topBox}>
//         <View style={styles.inputBoxWrapper}>
//           <Text>Please enter your login credentials</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangeUsername}
//             value={username}
//             placeholder="Username"
//             autoCorrect={false}
//             autoCapitalize="none"
//             keyboardType="email-address"
//           />
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangePassword}
//             value={password}
//             placeholder="Password"
//           />
//           <Text>{status}</Text>
//         </View>
//       </View>
//       <View style={styles.bottomBox}>
//         <TouchableOpacity
//           style={styles.buttonStyle}
//           onPress={() => {
//             doLogin();
//           }}>
//           <Text style={styles.buttonFont}>Login</Text>
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

// export default LoginPage;
