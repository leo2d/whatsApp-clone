import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>WhatsApp Clone</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <TextInput style={styles.inputs} placeholder="E-mail" />
                    <TextInput style={styles.inputs} placeholder="Senha" />
                    <Text style={styles.joinLink}>Criar conta</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} color='#115E54' title="Acessar" onPress={() => false} />
                </View>
            </View>

        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        //backgroundColor: '#F5FCFF',
        // flex: 2,
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
    joinLink: {
        fontSize: 18,
    },
    buttonContainer: {
        flex: 2,
        paddingTop: 30
    },
    button: {

    },
});