import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NodeCameraView} from 'react-native-nodemediaclient';

const {width, height} = Dimensions.get('window');

const config = {
  cameraConfig: {
    cameraId: 1,
    cameraFrontMirror: true,
  },
  videoConfig: {
    preset: 4,
    bitrate: 2000000,
    profile: 2,
    fps: 30,
    videoFrontMirror: false,
  },
  audioConfig: {
    bitrate: 128000,
    profile: 1,
    samplerate: 44100,
  },
};

const Broadcaster = () => {
  const [play, shouldPlay] = useState(false);
  const [flash, flashEnable] = useState(false);
  const cameraViewRef = React.useRef(null);
  const streamKey = 'cd649d75-0ecc-df40-ca22-55db95254262';
  const url = `rtmps://global-live.mux.com:443/app/${streamKey}`;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.tag}>
        <Text style={styles.tagline}>LIVE</Text>
      </View>
      <NodeCameraView
        style={{width, height}}
        ref={cameraViewRef}
        outputUrl={url}
        camera={config.cameraConfig}
        audio={config.audioConfig}
        video={config.videoConfig}
        autopreview={true}
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          // if (!play) {
          //   cameraViewRef.current.start();
          // } else {
          //   cameraViewRef.current.stop();
          // }
          cameraViewRef.current.switchCamera();
          shouldPlay(!play);
        }}>
        <FontAwesome
          name={`${play ? 'pause' : 'play'}-circle`}
          color="#fff"
          size={45}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flash}
        onPress={() => {
          if (!flash) {
            cameraViewRef.current.flashEnable(true);
          } else {
            cameraViewRef.current.flashEnable(false);
          }
          flashEnable(!flash);
        }}>
        <Ionicons name={flash ? 'flash' : 'flash-off'} color="#fff" size={45} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.camera}
        onPress={() => {
          cameraViewRef.current.switchCamera();
        }}>
        <Ionicons
          name={`md-camera-reverse-outline`}
          color="#fff"
          size={45}
        />
      </TouchableOpacity>
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
  icon: {
    position: 'absolute',
    bottom: height * 0.08,
  },
  flash: {
    position: 'absolute',
    bottom: height * 0.08,
    left: width * 0.15,
  },
  camera: {
    position: 'absolute',
    bottom: height * 0.08,
    right: width * 0.15,
  },
  tag: {
    backgroundColor: 'red',
    padding: 5,
    position: 'absolute',
    top: height * 0.05,
    right: width * 0.07,
    borderRadius: 5,
    zIndex: 3,
  },
  tagline: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Broadcaster;
