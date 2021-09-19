import React, { useState, useEffect } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import firebase from 'firebase';

import styles from './style';
import { MaterialIcons } from '@expo/vector-icons';

function Register({ navigation }) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorRegister, setErrorRegister] = useState("")

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;

                // <Text><MaterialIcons name="check" size={24} color="green" />
                // alert("Cadastro feito com sucesso")</Text>

                navigation.navigate('Task', { idUser: user.uid })
                // ...
            })
            .catch((error) => {
                setErrorRegister(true)
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }

    return (
        // <SafeAreaView>
        <KeyboardAvoidingView
            style={styles.container}
        >
            <Text style={styles.title}>Cadastro</Text>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Entre com seu email'
                    placeholderTextColor='hsl(250, 8%, 75%)'
                    type='text'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>
            <View>
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Entre com sua Senha'
                    placeholderTextColor='hsl(250, 8%, 75%)'
                    type='text'
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                />
            </View>

            {errorRegister == true ?
                <View style={styles.alert}>
                    <MaterialIcons name="error-outline" size={24} color="red" />
                    <Text style={styles.warningAlert}>Email ou senha inválidos!</Text>
                </View>
                :
                <View>
                    {/* <Text style={styles.warningAlert}></Text> */}
                </View>
            }
            {/* Verifica se os campos estão vazios */}
            {email === '' || senha === '' ?
                <TouchableOpacity
                    disabled
                    style={styles.btnRegister}
                >
                    <Text style={styles.txtBtnRegister}>Registre</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.btnRegister}
                    onPress={register}
                >
                    <Text style={styles.txtBtnRegister}>Registre</Text>
                </TouchableOpacity>
            }

            <Text style={styles.login}>
                Já possui acesso?
                <Text
                    style={styles.linkLogin}
                    onPress={() => navigation.navigate('Login')}
                >
                    Entre agora...
                </Text>
            </Text>
            <View style={{ height: 100 }}></View>
        </KeyboardAvoidingView>
        // </SafeAreaView>
    )
}
export default Register