import React from 'react'
import { Alert, Image, ScrollView, View } from 'react-native'
import { todoListStyle } from "../styles/styles"
import Todo from './Todo'

function TodoList({ todos,setTodos }) {
    function deleteTodo(id){
        setTodos(todos.filter((todo,i)=> i!=id??todo ))
        console.log(id)
    }
    return (
        <View>
            {todos.length == 0 ? <View style={todoListStyle.noRecords}><Image style={todoListStyle.noRecordsImage} source={require("../assets/no-data.webp")} /></View> :
                <ScrollView style={todoListStyle.todos}>
                    {todos.map((todo, i) => <Todo key={i} task={todo.task} deleteTodo={() => deleteTodo(i)} />)}
                </ScrollView>
            }
        </View>
    )
}

export default TodoList