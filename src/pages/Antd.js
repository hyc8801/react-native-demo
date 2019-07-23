import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import {
  Modal,
  DatePicker,
  List,
  Checkbox,
  Drawer,
  Picker,
  Switch,
  PickerView
} from '@ant-design/react-native';

const CheckboxItem = Checkbox.CheckboxItem;

const seasons = [
  {
    label: '2013',
    value: '2013',
  },
  {
    label: '2014',
    value: '2014',
  },
  {
    label: '春',
    value: '春',
  },
  {
    label: '夏',
    value: '夏',
  },
];

const seasons1 = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
    {
      label: '2013',
      value: '2015',
    },
    {
      label: '2014',
      value: '2017',
    },
    {
      label: '2013',
      value: '2016',
    },
    {
      label: '2014',
      value: '2018',
    },
    {
      label: '2013',
      value: '2019',
    },
    {
      label: '2014',
      value: '2024',
    },
    {
      label: '2013',
      value: '2033',
    },
    {
      label: '2014',
      value: '2044',
    },
    {
      label: '2013',
      value: '2053',
    },
    {
      label: '2014',
      value: '2064',
    },{
      label: '2013',
      value: '2073',
    },
    {
      label: '2014',
      value: '2084',
    },
    {
      label: '2013',
      value: '2093',
    },
    {
      label: '2014',
      value: '2114',
    },
    {
      label: '2013',
      value: '22013',
    },
    {
      label: '2014',
      value: '2314',
    },
    {
      label: '2013',
      value: '2413',
    },
    {
      label: '2014',
      value: '2514',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

export default class Antd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      pickerValue: '',
      checked: "",
      value: ""
    }
    this.onButtonClick = this.onButtonClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onButtonClick() {
    console.log(111)
    Modal.alert('Title', 'alert content', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('ok') },
    ]);
  }
  onChange(val) {
    console.log(val)
  }
  render() {
    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'College diploma' },
    ];

    return (
      <View  style={styles.container}>
        <View style={styles.btn}>
          <Button
            onPress={this.onButtonClick}
            title="alert"
          />
        </View>
        <View>
          <List>
            <DatePicker
              value={this.state.date}
              mode="date"
              minDate={new Date(2015, 7, 6)}
              maxDate={new Date(2026, 11, 3)}
              onChange={this.onChange}
              format="YYYY-MM-DD"
            >
              <List.Item arrow="horizontal">Select Date</List.Item>
            </DatePicker>
            <List.Item extra={<Switch
                checked={this.state.checked}
                onChange={(checked) => this.setState({checked})}
              />}>On(controlled)</List.Item>
          </List>
        </View>
        <Picker
            title="选择地区"
            data={seasons}
            cols={2}
            value={this.state.pickerValue}
            onChange={v => this.setState({ pickerValue: v })}
            onOk={v => this.setState({ pickerValue: v })}
          >
            <List.Item arrow="horizontal" onPress={this.onPress}>
                省市选择(异步加载)
              </List.Item>
        </Picker>
        {/* {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))} */}
        <PickerView
          onChange={this.onChange}
          value={this.state.value}
          data={seasons1}
          cascade={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  btn: {
    marginBottom: 10,
  },
  btn1: {
    backgroundColor: '#1890ff',
    marginBottom: 10,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    height: 40,
    lineHeight: 40,
    fontWeight: "600"
  },
  viewPager: {
    flex: 1,
    overflow: "hidden"
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#21ba45',
  }
})
