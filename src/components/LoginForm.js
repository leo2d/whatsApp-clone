import React from 'react';
import { View, Text, TextInput, ImageBackground, Button, StyleSheet, StatusBar } from 'react-native'
import { connect } from 'react-redux';
import { modifyEmail, modifyPassword } from '../actions/AutenticacaoActions';

const LoginForm = props => {
    return (
        <ImageBackground style={styles.imgBackground} source={require('../assets/images/bg.png')}>
            <View style={styles.container}>
                <StatusBar backgroundColor='#115E54' barStyle="light-content" />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>WhatsApp Clone</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <TextInput value={props.email} style={styles.inputs} placeholder="E-mail" keyboardType="email-address" placeholderTextColor='#FFF'
                        onChangeText={text => props.modifyEmail(text)} />
                    <TextInput value={props.password} style={styles.inputs} placeholder="Senha" placeholderTextColor='#FFF' secureTextEntry={true}
                        onChangeText={text => props.modifyPassword(text)} />

                </View>

                <Text style={styles.link}
                    onPress={() => props.navigation.navigate('SignUp')}
                >
                    Criar conta
                </Text>

                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={styles.button} onPress={() => false} color='#115E54' title="Acessar" />
                </View>

            </View>
        </ImageBackground>
    );
}

const mapStateToProps = state => {
    return {
        email: state.AutenticacaoReducer.email,
        password: state.AutenticacaoReducer.password
    };
}

export default connect(mapStateToProps, { modifyEmail, modifyPassword })(LoginForm);

const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
        width: null,
    },
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    inputsContainer: {
        flex: 2,
    },
    inputs: {
        fontSize: 20,
        height: 45,
    },
    link: {
        paddingBottom: 5,
        fontSize: 18,
        color: '#ffffff'
    },
    formContainer: {
        paddingTop: 15,
    },
    buttonContainer: {
        flex: 1,
    },
    button: {
        width: 120,
        height: 150,
    },
});