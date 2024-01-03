import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AddToDoStyle } from "../styles/styles"

export default function AddTodo({ todos, setTodos }) {
    const [addTodoValue, setAddTodoValue] = useState("");
    return (
        <View style={AddToDoStyle.addNewTodoContainer}>
            <SafeAreaView style={AddToDoStyle.addNewTodoInput}>
                <TextInput
                    value={addTodoValue}
                    onChangeText={(e) => setAddTodoValue(e)}
                    style={AddToDoStyle.input}
                    placeholder="Add a To-Do"
                    keyboardType="default"
                />
            </SafeAreaView>
            <TouchableOpacity onPress={() => {
                if (addTodoValue != "") {
                    setTodos([...todos, { task: addTodoValue }])
                    setAddTodoValue("")
                }
            }} style={AddToDoStyle.addNewTodo}>
                <Text style={AddToDoStyle.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}