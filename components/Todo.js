import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { todoStyle, smallIcon } from "../styles/styles"


export default function Todo(props) {
    const [checked, setChecked] = useState(false);
    return (
        <View style={[todoStyle.item, checked && todoStyle.itemChecked]}>
            <View style={todoStyle.itemLeft}>
                <TouchableOpacity onPress={() => setChecked(!checked)} style={[todoStyle.square, checked ? todoStyle.squareChecked : todoStyle.squareUnchecked]}></TouchableOpacity>
                <Text style={[todoStyle.todo, checked ? todoStyle.textChecked : todoStyle.textUnchecked]}>{props.task}{ props.currentTodo}</Text>
            </View>
            <View style={todoStyle.itemRight}>
                <TouchableOpacity style={todoStyle.deleteButton} onPress={() => props.deleteTodo()}>
                    <Image style={smallIcon} source={require('../assets/delete.webp')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}



