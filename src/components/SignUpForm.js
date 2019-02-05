import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

const SignUpForm = props => {
    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <TextInput value={props.name} style={styles.inputs} placeholder="Nome" />
                <TextInput value={props.email} style={styles.inputs} textContentType='emailAddress'
                    placeholder="E-mail" keyboardType="email-address" />
                <TextInput value={props.password} style={styles.inputs} textContentType='password'
                    placeholder="Senha" secureTextEntry={true} />
                <Text style={styles.link}
                    onPress={() => props.navigation.goBack()}
                >
                    Já possuo uma conta
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    buttonStyle={styles.button} onPress={() => false} color='#115E54' title="Cadastrar" />
            </View>
        </View>
    );
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

export default connect(mapStateToProps, null)(SignUpForm);

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