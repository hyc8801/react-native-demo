import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export class FlatListScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.listView.scrollToIndex({
        index: 1
      })
    }, 500)
  }
  render() {
    return (
      <View>
        <FlatList
          ref={(c) => this.listView = c}
          // horizontal
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text style={{height , borderWidth: 1, borderColor: "#ccc"}}>{item.key}</Text>}
          />
      </View>
    )
  }
}

export default FlatListScreen
