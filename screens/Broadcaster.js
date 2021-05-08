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
import {NodeCameraView} from 'react-native-nodemediaclient';

const {width, height} = Dimensions.get('window');

const config = {
  cameraConfig: {
    cameraId: 1,
    cameraFrontMirror: false,
  },
  videoConfig: {
    preset: 4,
    bitrate: 2000000,
    profile: 2,
    fps: 30,
    videoFrontMirror: true,
  },
  audioConfig: {
    bitrate: 128000,
    profile: 1,
    samplerate: 44100,
  },
};

const Broadcaster = () => {
  const [play, shouldPlay] = useState(false);
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
          if (!play) {
            cameraViewRef.current.start();
          } else {
            cameraViewRef.current.stop();
          }
          shouldPlay(!play);
        }}>
        <FontAwesome
          name={`${play ? 'pause' : 'play'}-circle`}
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
