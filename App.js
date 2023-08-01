import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import RootRouter from './src/Navigations';

const App = () => {

  return (
  <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <RootRouter/>
      </View>
    </SafeAreaView>
  );  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default App;
