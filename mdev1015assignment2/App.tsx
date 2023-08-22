import {StyleSheet, Text, View, Button} from 'react-native';
import FlexBox from './src/components/FlexBox';
import Forums from './src/components/Student_forums';
import WelcomePage from './src/components/WelcomePage';
import Student_event from './src/components/Student_event';
import PageEvents from './src/components/Student_event';
import Profile1 from './src/components/Profile1';
import Profile2 from './src/components/Profile2';
import {AuthProvider} from './src/context/AuthContext';
import WelcomePageMain from './src/components/WelcomePage';
import LandingPage from './src/components/LandingPage';
import LoginPage from './src/components/LoginPage';
import SignUpPage from './src/components/SignUpPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import './src/config/firebase';

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthProvider>
          <MainStack.Navigator
            initialRouteName="Landing"
            screenOptions={{
              headerShown: false,
            }}>
            {/* Logged out pages */}
            <MainStack.Screen name="Landing" component={LandingPage} />
            <MainStack.Screen name="SignUp" component={SignUpPage} />
            <MainStack.Screen name="Login" component={LoginPage} />

            {/* Logged in pages */}
            <MainStack.Screen name="AfterLogin" component={WelcomePage} />
            <MainStack.Screen name="Forums" component={Forums} />
            <MainStack.Screen name="FlexBox" component={FlexBox} />
            <MainStack.Screen name="Events" component={PageEvents} />
            <MainStack.Screen name="Profile" component={Profile1} />
            <MainStack.Screen name="Profile2" component={Profile2} />
            <MainStack.Screen name="Student_event" component={Student_event} />
          </MainStack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
