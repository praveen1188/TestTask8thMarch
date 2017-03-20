
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
var xyz= null;
export default class TestTask8thMarch extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row1', 'row2']),
    };
  }
   componentWillMount() {
    this.callLoginApi()
  }
  callLoginApi() {

    fetch(
      'https://itunes.apple.com/us/rss/topfreeapplications/limit=20/json',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',

      })
      .then((response) => response.json())
      .then((responseJson) => {
         xyz=responseJson.feed.entry
         console.log('\n\n\n\nn\n\n\n\n\n\n\n');
         console.log(responseJson.feed.entry);
         console.log('\n\n\n\nn\n\n\n\n\n\n\n');
         console.log(xyz);
         this.setState({dataSource: ds.cloneWithRows(responseJson.feed.entry)})
      })
      .catch( function( error ) {
        console.log('Error is response')
      });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        style={{height: 100, width: 100, backgroundColor: "red"}}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestTask8thMarch', () => TestTask8thMarch);
