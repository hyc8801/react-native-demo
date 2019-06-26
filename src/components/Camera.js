'use strict';
import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, StatusBar, PanResponder, Dimensions  } from 'react-native';
import { RNCamera } from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      width: '100%',
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

class Camera extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      cameraType: RNCamera.Constants.Type.back,
      camera: null,
      zoom: 0,
    }
    this.switchCamera = this.switchCamera.bind(this)
    this.Pan = this.Pan.bind(this)
  }
  componentDidMount() {
    // 状态栏隐藏
    StatusBar.setHidden(true)
    console.log(RNCamera.Constants)
  }
  
  takePicture = async function(camera) {
    const options = {};
    const data = await camera.takePictureAsync(options);
    this.props.onTake && this.props.onTake(data.uri)
  };
  switchCamera() {
    var state = this.state;
    if(state.cameraType === 0) {
      state.cameraType = 1;
    }else{
      state.cameraType = 0;
    }
    this.setState({state});
  }
  Pan(event, gestureState) {
    console.log(event)
    console.log(gestureState)
  }
  render() {
    return (
      <View style={styles.container} onPanResponderMove={this.Pan}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          // zoom={this.state.zoom}
          style={styles.preview}
          type={this.state.cameraType}
          flashMode={RNCamera.Constants.FlashMode.auto}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> 咔嚓 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.switchCamera} style={styles.capture}>
                  <Text style={{ fontSize: 14 }} > 切换镜头 </Text>
                </TouchableOpacity>
                
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

AppRegistry.registerComponent('Camera', () => Camera);

export default Camera
