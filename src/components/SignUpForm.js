import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const SignUpForm = props => {
    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <TextInput style={styles.inputs} placeholder="Nome" />
                <TextInput style={styles.inputs} textContentType='emailAddress'
                 placeholder="E-mail" keyboardType="email-address" />
                <TextInput style={styles.inputs} textContentType='password'
                placeholder="Senha" secureTextEntry={true} />
                <Text style={styles.link}
                    onPress={() => props.navigation.goBack()}
                >
                    Já possuo uma conta
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button //containerStyle={{ flex: 1 }}
                    buttonStyle={styles.button} onPress={() => false} color='#115E54' title="Cadastrar" />
            </View>
        </View>
    );
}

export default SignUpForm;

const styles = StyleSheet.create({
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
        fontSize: 18,
        color: '#115E54'
    },
    buttonContainer: {
        flex: 1,
        padding: 10,
    },
    button: {

    },
});