import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const uri =
  // 'https://stream.mux.com/KudTK6OAxVWGXcIMRITGkW7yGvLVfzWgFUSCyrgDerM.m3u8';
  'https://stream.mux.com/oZPNsuldbHjeaaJgYyKSPg3gv3JbAuko8fSw501AAFPQ.m3u8';
  
const Viewer = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Video
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        source={{
          uri,
          type: 'm3u8',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});

export default Viewer;
