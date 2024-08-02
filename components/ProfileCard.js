import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

const dimension = Dimensions.get('window').width

const ProfileCard = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f0f0f0",
        borderWidth:1,
        borderColor:"#b8baba",
        width:(dimension/2)-25,
        paddingTop:10,
        paddingBottom:10,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:20,
        marginRight:10,
        marginBottom:10
    }
})