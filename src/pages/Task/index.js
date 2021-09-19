import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

// import firebase from '../../config/firebase';
import firebase from "firebase";
// import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './style';

function Task({ navigation, route }) {

    const [task, setTask] = useState([])
    const db = firebase.firestore()

    function logout(){
        firebase.auth().signOut().then(() => {
            navigation.navigate('Login')
        }).catch((error) => {
            // An error happened.
        });
    }

    function deleteTask(id) {
        db.collection(route.params.idUser).doc(id).delete()
    }

    useEffect(() => {
        db.collection(route.params.idUser).onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setTask(list)
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.allTasks}>
                            <Text
                                style={styles.descriptionTask}
                                onPress={() => {
                                    navigation.navigate('Details', {
                                        id: item.id,
                                        description: item.description,
                                        idUser: route.params.idUser
                                    })
                                }}

                            >
                                {/* <MaterialIcons name="edit" size={15} color="black" style={{marginRight: 15}} /> */}
                                {item.description}

                            </Text>
                            <TouchableOpacity
                                style={styles.deleteTask}
                                onPress={() => {
                                    deleteTask(item.id)
                                }}
                            >
                                {/* <AntDesign name="delete" size={24} color="blue" /> */}
                                <MaterialIcons name="delete-outline" size={30} color="red" />
                            </TouchableOpacity>

                        </View>
                    )
                }}
            />
            <TouchableOpacity
                style={styles.btnNewTask}
                onPress={() => navigation.navigate('NewTask', { idUser: route.params.idUser })}
            >
                {/* <AntDesign name="plus" size={24} color="black" style={styles.iconBtn} /> */}
                <MaterialIcons name="add" size={24} style={styles.iconBtnNewTask} />
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btnLogout}
            onPress={() => {logout()}}
            >
                <MaterialIcons name="logout" size={24} color="blue" style={styles.iconBtnLogout} />
            </TouchableOpacity>
        </View>
    )
}

export default Task