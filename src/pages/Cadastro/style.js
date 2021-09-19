import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'hsl(250, 29%, 16%)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 35,
        color: 'hsl(250, 8%, 95%)',
        marginBottom: 10,
        fontWeight: 'bold',
        marginTop: 20,

    },
    label: {
        alignSelf: 'flex-start',
        marginTop: 20,
        color: 'hsl(250, 8%, 75%)'
    },
    input: {
        width: 300,
        height: 50,
        // marginTop: 10,
        padding: 10,
        paddingLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'hsl(250, 8%, 75%)',
        color: 'hsl(250, 29%, 16%)'
        // marginLeft: 'auto',
        // marginRight: 'auto'
    },
    btnRegister: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
        borderRadius: 30,
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#FFF',
        color: 'hsl(250, 29%, 16%)',
    },
    txtBtnRegister: {
        color: '#FFF'
    },
    alert: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    warningAlert: {
        paddingLeft: 10,
        fontSize: 16,
        color: '#FFF'
    },
    login: {
        marginTop: 20,
        color:  'hsl(250, 8%, 75%)',

    },
    linkLogin: {
        color: 'hsl(250, 8%, 95%)',
    }
});

export default styles