import React, { PureComponent } from 'react'
import { View, Modal } from 'react-native'
import Picker from 'react-native-picker';



export default class myPicker extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
    this.formatData = this.formatData.bind(this)
    this.init = this.init.bind(this)
  }
  componentDidMount() {
    
  }
  formatData(data = []) {
    return data.map(item => {
      if (typeof item === 'object') {
        const val = item.label || item.value
        if (item.children) {
          let child = {}
          child[val] = this.formatData(item.children)
          return child
        }
        return item.label || item.value
      } else {
        return item
      }
    })
  }
  formatValue(data = [], valarr) {
    let _val = []
    let _data = data
    for (let i = 0; i < valarr.length; i++) {
      const item = valarr[i];
      for (let j = 0; j < _data.length; j++) {
        const element = _data[j];
        if (typeof element === 'object') {
          if (element.label === item) {
            _val.push(element.value)
            if (element.children) {
              _data = element.children
            }
            break
          }

        } else {
          if (item === _data[j]) {
            _val.push(item)
            break
          }
        }
      }
           
    }
    return  _val
  }
  init() {
    Picker.init({
      pickerData: this.formatData(this.props.data),
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '',
      pickerToolBarBg: [255, 255, 255, 1],
      pickerBg: [255, 255, 255, 1],
      selectedValue: ["指南", "导航", "顶部导航"],
      onPickerConfirm: val => {
          console.log(val);
          // console.log(this.formatValue(this.props.data, val))
          this.setState({modalVisible: false})
      },
      onPickerCancel: data => {
          console.log(data);
          this.setState({modalVisible: false})
      },
      onPickerSelect: data => {
          // console.log(data);
      }
    });
  }
  show() {
    this.setState({
      modalVisible: true
    }, () => {
      this.init()
      Picker.show()
      
    })
  }
  hide() {
    this.setState({
      modalVisible: false
    }, () => {
      Picker.hide()
    })
  }
  render() {
    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Picker.hide();
          this.setState({modalVisible: false})
        }}
        onPress={() => console.log(111)}
        >
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: "100%"}}></View>
      </Modal>
    )
  }
}

