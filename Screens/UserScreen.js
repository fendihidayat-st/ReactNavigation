/* eslint-disable react/react-in-jsx-scope */
import {Text, StyleSheet, View, Button} from 'react-native';

const UserScreen = ({navigation}) => {
  return (
    <View style={styles.viewStyle}>
      <Text>React Navigation</Text>
      <Text style={styles.textStyle}>This is User Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button title="Go To Home" onPress={() => navigation.replace('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default UserScreen;
