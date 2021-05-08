import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Broadcaster = () => {
  return (
    <View style={styles.container}>
      <Text>Broadcaster</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Broadcaster;
