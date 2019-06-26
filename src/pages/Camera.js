import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Modal, TouchableHighlight, Image } from 'react-native'
import Camera from "../components/Camera";
// import ImagePicker from 'react-native-image-picker';
import request from "../utils/request";
import { uoloadFile } from "../api/commom";

const options = {
  title: 'Select Avatar',
  customButtons: [],
  storageOptions: {
    skipBackup: true,
    quality: 0.1,
    path: 'images',
  },
};

export class CameraScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      imgList: [],
    }
    this.setModalVisible = this.setModalVisible.bind(this)
    this.handleTake = this.handleTake.bind(this)
    this.handleSelectPhoto = this.handleSelectPhoto.bind(this)
  }
  setModalVisible(modalVisible) {
    this.setState({
      modalVisible
    })
  }
  handleTake(url) {
    console.log(url)
    const { imgList } = this.state
    imgList.push(url)
    this.setState({
      imgList,
      modalVisible: false,
    })
  }
  handleSelectPhoto() {
    // ImagePicker.launchCamera 直接打开相机
    // ImagePicker.launchImageLibrary 直接选择图片
    // ImagePicker.showImagePicker 

    // ImagePicker.launchCamera(options, (response) => {
    //   console.log('Response = ', response);
    
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //     const { imgList } = this.state
    //     console.log(response)
    //     imgList.push(response.uri)
    //     this.setState({
    //       imgList,
    //     })
    //     request.upload('http://192.168.13.32:3000/upload', response)
    //     .then(res => {
    //       console.log(res)
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //     // uoloadFile(response)
    //     // .then(res => {
    //     //   console.log(res)
    //     // }).catch(err => {
    //     //   console.log(err)
    //     // })
    //   }
    // });
  }
  render() {
    const { imgList } = this.state
    return (
      <View style={style.container}>
        <Button title="拍照" onPress={ () => {this.setModalVisible(true)}}/>
        <Button title="选择相册" onPress={this.handleSelectPhoto}/>
        {/* <Camera onTake={this.handleTake}/> */}
        {
          imgList.map((item, index) => <Image style={style.stretch} key={index} source={{uri: item}}/>)
        }
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          <View style={style.imgList}>
            <Camera onTake={this.handleTake}/>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(false);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgList: {
    flex: 1,
    justifyContent: 'space-around',

  },
  stretch: {
    width: 180,
    height: 180
  }
})

export default CameraScreen
