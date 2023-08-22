import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useAuth} from '../context/AuthContext';

const WelcomePageMain = ({navigation}) => {
  const {user, signOut} = useAuth();

  async function doSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  if (!user) {
    navigation.reset({
      index: 0,
      routes: [{name: 'Landing'}],
    });
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.textstyle}>Welcome Page</Text>
      <Text></Text>
      <Text></Text>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1553525553-f373087438be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuYWRhJTIwd2ludGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          height: 300,
          width: 300,
        }}
      />
      <Text
        style={styles.clickme}
        onPress={() => {
          Alert.alert('Attention!', 'Sign Out?', [
            {
              text: 'yes',
              onPress: () => {
                doSignOut();
                console.log('njx');
              },
            },
            {
              text: 'no',
              onPress: () => {
                console.log('no');
              },
            },
          ]);
        }}>
        ALERT
      </Text>

      <View style={styles.buttonGroup}>
        <Button title="Forums" onPress={() => navigation.navigate('Forums')} />
        <Button
          title="FlexBox"
          onPress={() => navigation.navigate('FlexBox')}
        />
        <Button title="Events" onPress={() => navigation.navigate('Events')} />
        <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="Profile 2"
          onPress={() => navigation.navigate('Profile2')}
        />
        {/* Student_event */}
        <Button
          title="Student Event"
          onPress={() => navigation.navigate('Student_event')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'space-evenly',
    gap: 12,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    alignItems: 'center',
  },
  textstyle: {
    textAlign: 'center',
    paddingTop: 70,
    fontSize: 30,
  },
  clickme: {
    margin: 10,
    padding: 10,
    backgroundColor: '#0000ff',
    color: '#fff',
  },
});

export default WelcomePageMain;
