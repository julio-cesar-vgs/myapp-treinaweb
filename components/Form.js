import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'

class Form extends Component {

    static defaultProps = {
        onAdd: () => { }
    }
    state = {
        text: ''
    }

    // adicionar um novo texto e verificar se ha valor nele
    add = () => {
        const { state } = this;
        if (state.text) {
            this.props.onAdd(state.text);
            this.handleChange('');
        }
    }

    //funcao para verificar se o texto foi modificado ou nao
    handleChange = (text) => {
        this.setState({ text });
    }

    render() {
        const { state } = this;
        return (
            <View>
                <TextInput value={state.text} onChangeText={this.handleChange} />
                <Button
                    title="add"
                    color="blue"
                    onPress={this.add}
                />
            </View>
        )
    }
}



export default Form;