import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import Feature from './Feature'

function Item(props){
    
    const { data, index } = props
    const { breed } = data
    const keys = Object.keys(data).filter(key => key!== 'breed')

    const average = (keys.reduce((acc, key)=>{
        return acc + data[key]
    }, 0)/ keys.length).toFixed(1)

    return(
        <View style={style.container}>
            <Text style={style.label}>{index}: {breed} {average}</Text>
            {keys.map( key => <Feature name={key} value={data[key]}/>)}
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