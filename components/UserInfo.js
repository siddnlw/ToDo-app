import React from 'react'
import { Image, Text, View } from 'react-native'
import LocationComponent from '../utils/Location'
import { UserInfoStyle } from "../styles/styles"

export default function UserInfo({ name }) {
    return (
        <View style={UserInfoStyle.userInfo}>
            <View >
                <Text style={UserInfoStyle.heading}>Hey, {name}!</Text>
                <LocationComponent />
            </View>
            <Image style={UserInfoStyle.userImage} source={require("../assets/user.webp")} />
        </View>
    )
}
