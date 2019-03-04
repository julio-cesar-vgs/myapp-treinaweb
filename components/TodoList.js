
import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

class TodoList extends Component {
    static defaultProps = {

        onRemove: () => {

        }
    }
    handlerRow = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Text style={{ flex: 1 }}>
                    {this.formatListNUmber(index)} - {item.text}
                </Text>
                <Button
                    style={{ width: 30 }}
                    title="X"
                    color="red"
                    onPress={() => this.props.onRemove(item)}
                />
            </View>
        )
    }

    formatListNUmber(number) {
        const digits = 2;
        return ('0'.repeat(digits) + (number + 1)).slice(-2)
    }
    render() {
        const { props } = this;
        const keyExtractor = item => item.id
        return (
            <View>
                <FlatList
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={this.handlerRow}
                />
            </View>
        )
    }
}


export default TodoList;