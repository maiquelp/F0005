import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (

        <View style={styles.container}>
          <View style={styles.header}>
            <Text>Back</Text>
            <Text>Title</Text>
            <Text>Profile</Text>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC'
  },
  header: {
    height: 60,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default App;
