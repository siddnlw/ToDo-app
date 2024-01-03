import { StyleSheet } from 'react-native';

export const LocationStyle = StyleSheet.create({
    addressText: {
        marginTop: 5,
        fontSize: 17
    },
});

export const todoStyle = StyleSheet.create({
    item: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5,
        elevation: 2,
    },
    itemChecked: {
        backgroundColor: '#dcdcdc',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemRight: {
        width: 24,
        height: 24,
        borderRadius: 5,
        opacity: 0.4
    },
    todo: {
        fontSize: 18,
        marginLeft: 10,
    },
    square: {
        backgroundColor: '#55BCF6',
        width: 24,
        height: 24,
        borderRadius: 5,
        opacity: 0.4
    },
    squareChecked: {
        backgroundColor: '#55f6c3',
    },
    squareUnchecked: {
        backgroundColor: '#55BCF6',
    },
    textChecked: {
        textDecorationLine: 'line-through',
    },
    textUnchecked: {
    },
    deleteButton:{
    }
});

export const smallIcon = StyleSheet.create({ width: 25, height: 25 })

export const todoListStyle = StyleSheet.create({
    todos: {
        marginTop: 30,
    },
    noRecords: {
        height: "100%",
        marginTop: -100,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5
    },
    noRecordsImage: {
        width: 300,
        height: 300,
    },
});

export const AddToDoStyle = StyleSheet.create({
    input: {
        height: "105%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        width: '105%',
    },
    addNewTodoContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // gap: 10,
        paddingLeft: 10,
        // paddingRight:10,
        bottom: 20,
        left: 0,
        height: 50,
        width: "100%"

    },
    addNewTodoInput: {
        flex: 1,
        width: 'auto',
        height: '100%',
        borderRadius: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 3,
        overflow: 'hidden',
    },
    addNewTodo: {
        width: 50,
        marginLeft: 10,
        marginRight: -8,
        // height: "100%",
        borderRadius: 50,
        backgroundColor: '#fff',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 3,
    },
    addButtonText: {
        fontSize: 30
    }
});

export const UserInfoStyle = StyleSheet.create({
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    userImage: {
        width: 60,
        height: 60,
    },
    heading: {
        fontSize: 38,
        fontWeight: 'bold'
    },
});

export const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        padding: 10,
        minHeight: '100vh'
    },

    tasksContainer: {
        marginTop: 50,
        paddingBottom: 50,
    },



});