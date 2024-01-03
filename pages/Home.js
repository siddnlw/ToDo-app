import React, { useState } from 'react'
import { homeStyle } from "../styles/styles"
import { View } from 'react-native';
import UserInfo from '../components/UserInfo';
import TodoList from '../components/todoList';
import AddTodo from '../components/AddTodo';

export default function Home() {
    const [todos, setTodos] = useState([{task:"<- click to toggle check/unckeck."}]);
    return (
        <View style={homeStyle.container}>
            <View style={homeStyle.tasksContainer}>
                <UserInfo name={"John"} />
                <TodoList todos={todos} setTodos={setTodos}/>
            </View>
            <AddTodo todos={todos} setTodos={setTodos} />
        </View>
    )
}