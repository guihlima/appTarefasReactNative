import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";


import { MaterialIcons } from '@expo/vector-icons';

import firebase from '../../config/firebase'
import styles from "./style";

function Details({navigation, route}) {

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idTask = route.params.id
    const db = firebase.firestore()

    function editTask(description, id){
        db.collection(route.params.idUser).doc(id).update({
            description: description,
        })
        navigation.navigate('Task')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder='Ex: Faltar aula amanhã'
                placeholderTextColor = 'hsl(250, 8%, 75%)'
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />

            <TouchableOpacity 
            style={styles.btnEditTask}
            onPress={() => {editTask(descriptionEdit, idTask)}}
            >
                <MaterialIcons name="save" size={24} color="white" />
                <Text style={styles.btnSave}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Details