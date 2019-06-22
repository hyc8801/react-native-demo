import React, { Component } from 'react'
import { Text, View, FlatList, Button, StyleSheet } from 'react-native'
import realm from "../db/index";
import RealmBase from "../db/db";

var num = 0

var userReal = new RealmBase('user', 'uid')


export default class Web extends Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleDelTable = this.handleDelTable.bind(this)
    // this.handleDel = this.handleDel.bind(this)
    this.state = { 
      realm: null,
      tableData: []
    };
  }
  componentWillMount() {
    this.getUserList()
  }
  getUserList() {
    this.setState({
      tableData: userReal.query().list
    })
  }
  handleAdd() {
    let params = {
      name: `名字11${userReal.id}`,
      phone: `137xxxxxxx${userReal.id}`
    }
    userReal._insert(params)
    this.getUserList()
  }
  handleDel(item) {
    userReal.delete({
      uid: item.uid
    })
    this.getUserList()
  }
  handleClear() {
    userReal.delete()
    this.getUserList()
  }
  handleDelTable() {
    realm.deleteModel('user')
    alert('ok')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{minHeight: 50, justifyContent: 'center'}}>
          <Button onPress={this.handleAdd} title="添加" />
          <Button onPress={this.handleClear} title="删除全部" />
          <Button onPress={this.handleDelTable} title="删除表" />
        </View>
        <FlatList
          data={this.state.tableData}
          renderItem={({item}) => {
            return <View style={styles.item}>
                      <Text style={styles.text}>{item.uid}</Text>
                      <Text style={styles.text}>{item.name}</Text>
                      <Text style={styles.text}>{item.phone}</Text>
                      <Button onPress={this.handleDel.bind(this, item)} title="删除" />
                    </View>
          }}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
  }
})