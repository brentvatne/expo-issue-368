import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Font } from 'expo';

export default class App extends React.Component {
  state = {
    loaded: false,
  }

  componentWillMount() {
    this._loadFontsAsync();
  }

  _loadFontsAsync = async () => {
    await Font.loadAsync({bellefair: require('./Bellefair-Regular.ttf')});
    this.setState({loaded: true});
  }

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'bellefair',
    fontSize: 30,
  },
});
