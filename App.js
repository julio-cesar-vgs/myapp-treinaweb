import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList';
import Form from './components/Form';
export default class App extends React.Component {
  state = {
    list: [
      { id: '1', text: 'abc' },
      { id: '2', text: 'def' },
      { id: '12', text: '234' },
      { id: '13', text: '2345' },
      { id: '4', text: '567567' },
    ],
  }
  render() {
    const { state } = this;
    return (
      <View style={styles.container}>
        <Form />
        <TodoList list={state.list} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 15


  },
});