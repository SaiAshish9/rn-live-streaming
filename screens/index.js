import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <TouchableOpacity
        onPress={() => {
          navigation.push('broadcaster');
        }}>
        <View style={styles.button}>
          <Text>Start Streaming</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.push('viewer');
        }}>
        <View style={styles.button}>
          <Text>View Stream</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 10,
    minWidth: 120,
    alignItems: 'center',
  },
});

export default Home;
