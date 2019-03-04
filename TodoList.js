import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

class TodoList extends Component {
    static defaultProps = {
        list: [
            
        ]
    }
    handlerRow = ({ item, index }) => {
        return (
            <View>
                <Text>
                    {this.formatListNUmber(index)} - {item.text}
                </Text>
            </View>
        )
    }

    formatListNUmber(number) {
        const digits = 2;
        ('0'.repeat(digits) + (number + 1).slice(-2))
    }
    render() {
        const { props } = this;
        const keyExtractor = item => item.id
        return (
            <View>
                <FlatList
                    data={props.list}>
                    keyExtractor={keyExtractor}
                    renderItem={this.handlerRow}
                </FlatList>
            </View>
        )
    }
}


export default TodoList;