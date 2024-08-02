import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const CategoryCard = ({img,text}) => {
  return (
    <View style={styles.container}>
      <Image 
        style={{ height:60,width:60,resizeMode:"cover"}}
        source={{uri:img}}/>
      <Text>{text}</Text>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        marginRight:20
    }
})