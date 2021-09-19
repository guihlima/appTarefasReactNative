import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

import firebase from '../../config/firebase';
import styles from "./style";

function NewTask({navigation, route}) {

    const [description, setDescription] = useState(null)
    const db = firebase.firestore()

    function addTask(){
        db.collection(route.params.idUser).add({
            description: description,
            status: false
        })
        navigation.navigate('Task', { idUser: route.params.idUser })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder='Ex: Faltar aula amanhã'
                placeholderTextColor = 'hsl(250, 8%, 75%)'
                onChangeText={setDescription}
                value={description}
            />

            <TouchableOpacity 
            style={styles.btnNewTask}
            onPress={() => {addTask()}}
            >
                <MaterialIcons name="save" size={24} color="white" />
                <Text style={styles.iconBtnSave}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewTask