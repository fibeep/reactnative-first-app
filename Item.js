import React from 'react'
import { View, Text, StyleSheet } from "react-native";


function Item(props){
    
    const { data, index } = props
    const { breed } = data
    const keys = Object.keys(data).filter(key => key!== 'breed')

    return(
        <View style={style.container}>
            <Text style={style.label}>{index}: {breed}</Text>
            {keys.map( key => <Text>{key} {data[key]}</Text>)}
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        padding:10,
        margin: 1
    },
    label: {
        fontSize: 28
    }
})

export default Item