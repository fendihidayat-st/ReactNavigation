/* eslint-disable react/react-in-jsx-scope */
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = props => {
  console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>React Navigation</Text>
      <Text>This is Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
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

export default HomeScreen;
