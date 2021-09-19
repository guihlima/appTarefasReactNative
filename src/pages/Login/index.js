import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";

import firebase from "firebase";
import Register from "../Cadastro";
import Task from "../Task";

import styles from "./style";
import { MaterialIcons } from '@expo/vector-icons';

function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // navigation.navigate('Task')
                navigation.navigate('Task', {idUser: user.uid})
                // ...
            })
            .catch((error) => {
                setErrorLogin(true)
                var errorCode = error.code;
                var errorMessage = error.message;
            });

    }

    // Função usuario logado
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // var uid = user.uid;
                navigation.navigate('Task', {idUser: user.uid})
                // ...
            }
        });
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <Text style={styles.title}>Login</Text>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Entre com seu email'
                    placeholderTextColor = 'hsl(250, 8%, 75%)'
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
                    placeholderTextColor = 'hsl(250, 8%, 75%)'
                    type='text'
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                />
            </View>

            {errorLogin == true ?
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
                    style={styles.btnLogin}
                >
                    <Text style={styles.txtBtnLogin}>Entrar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={loginFirebase}
                >
                    <Text style={styles.txtBtnLogin}>Entrar</Text>
                </TouchableOpacity>
            }

            <Text style={styles.registration}>
                Não é cadastrado?
                <Text
                    style={styles.linkSubscribe}
                    onPress={() => navigation.navigate('Register')}
                >
                    Increva-se agora...
                </Text>
            </Text>
            <View style={{ height: 100 }}></View>
        </KeyboardAvoidingView>
    )
}

export default Login