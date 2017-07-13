import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Font } from 'expo';

export default class App extends React.Component {

  state = { ready: false }

  componentWillMount(){
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync(){
    try {
      await Font.loadAsync({
        'montserrat': require('./assets/fonts/Montserrat-Regular.ttf')
      });
    }
    catch(e) {
      Log.error(e);
    }
    finally {
      console.log(Font.isLoaded('montserrat'));
      console.log(Font.style('montserrat'));
      this.setState({ready: true});
    }
  }

  render() {
    if (!this.state.ready) {
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
    fontFamily: 'montserrat',
    fontSize: 30,
  },
});
