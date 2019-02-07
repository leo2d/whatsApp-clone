import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { modifyEmail, modifyPassword, modifyName, createUser } from '../actions/AutenticacaoActions';

class SignUpForm extends Component {

    _createUser() {
        //pega os valores das props por conta de ter o mesmo nome
        const userData = { name, email, password } = this.props;

        this.props.createUser(userData);
    }

    render() {
        return (
            <ImageBackground style={styles.imgBackground} source={require('../assets/images/bg.png')}>
                <View style={styles.container}>
                    <StatusBar backgroundColor='#115E54' />
                    <View style={styles.inputsContainer}>
                        <TextInput value={this.props.name} style={styles.inputs} placeholder="Nome" placeholderTextColor='#FFF' onChangeText={text => this.props.modifyName(text)} />
                        <TextInput value={this.props.email} style={styles.inputs} onChangeText={text => this.props.modifyEmail(text)}
                            textContentType='emailAddress' placeholder="E-mail" placeholderTextColor='#FFF' keyboardType="email-address" />
                        <TextInput value={this.props.password} style={styles.inputs} placeholderTextColor='#FFF' onChangeText={text => this.props.modifyPassword(text)}
                            textContentType='password' placeholder="Senha" secureTextEntry={true} />
                    </View>

                    <Text style={styles.link}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        Já possuo uma conta
                </Text>

                    <View style={styles.buttonContainer}>
                        <Button
                            buttonStyle={styles.button} onPress={() => this._createUser()} color='#115E54' title="Cadastrar" />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            name: state.AutenticacaoReducer.name,
            email: state.AutenticacaoReducer.email,
            password: state.AutenticacaoReducer.password,
        }
    );
};

export default connect(mapStateToProps, { modifyEmail, modifyPassword, modifyName, createUser })(SignUpForm);

const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
        width: null,
    },
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    inputsContainer: {
        flex: 4,
        paddingTop: 60,
    },
    inputs: {
        fontSize: 20,
        height: 45,
    },
    link: {
        paddingBottom: 5,
        fontSize: 18,
        color: '#FFF'//'#115E54'
    },
    buttonContainer: {
        flex: 1,
        padding: 10,
    },
    button: {

    },
});