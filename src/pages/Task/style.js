import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'hsl(250, 29%, 16%)',
        paddingTop: 20,
    },
    allTasks: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    deleteTask: {
        justifyContent: 'center',
        paddingRight: 15,
    },
    descriptionTask: {
        width: '80%',
        alignContent: 'flex-start',
        backgroundColor: '#F5F5F5CF',
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginLeft: 15,
        color: 'hsl(250, 10%, 25%)'

    },
    iconEdit: {

    },
    btnNewTask: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 50,
        bottom: 30,
        right: 20,
        // backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconBtnNewTask: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    btnLogout: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FFF',
        color: 'hsl(250, 29%, 16%)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconBtnLogout: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default styles