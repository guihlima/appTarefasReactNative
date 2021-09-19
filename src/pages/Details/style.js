import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'hsl(250, 29%, 16%)',
    },
    label:{
        width: '90%',
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color: 'hsl(250, 8%, 75%)'
    },
    input: {
        width: '90%',
        height: 50,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'hsl(250, 8%, 75%)',
        color: 'hsl(250, 8%, 75%)'
    },
    btnEditTask: {
        width: '50%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 30,
        borderWidth: 1,
borderColor: '#FFF'
    },
    btnSave: {
        color: '#FFF',
        marginLeft: 5
    }
});

export default styles