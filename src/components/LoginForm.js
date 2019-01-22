import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native'
// import { Button } from 'react-native-elements'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>WhatsApp Clone</Text>
            </View>
            <View style={styles.inputsContainer}>
                <TextInput style={styles.inputs} placeholder="E-mail" keyboardType="email-address" />
                <TextInput style={styles.inputs} placeholder="Senha" secureTextEntry={true} />
                <Text style={styles.link}
                    onPress={() => props.navigation.navigate('SignUp')}
                    >
                    Criar conta
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button //containerStyle={{ flex: 1 }}
                    buttonStyle={styles.button} onPress={() => false} color='#115E54' title="Acessar" />
            </View>

            {/* <TouchableOpacity onPress={() => false}>
                <View style={styles.buttonContainer}>
                    <Text>Acessar</Text>
                </View>
            </TouchableOpacity> */}

        </View>
    );
}

const styles = StyleSheet.create({
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
    },
    inputsContainer: {
        flex: 2,
    },
    inputs: {
        fontSize: 20,
        height: 45,
    },
    link: {
        fontSize: 18,
        color: '#115E54'
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