import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'

let dimension = (Dimensions.get("window").width);
const DealCard = ({text,img}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dealItem}>
      <Image
        source={{uri:img}}
        style={styles.dealImage}
      />
      <Text>{text}</Text>
      </View>
    </View>
  )
}

export default DealCard

const styles = StyleSheet.create({
  container:{
    padding:15,
    paddingTop:0,
    overflow:"hidden"
  },
  dealImage:{
    height:100,
    resizeMode:"contain"
  },
  dealText:{
    fontSize:16,
    fontWeight:"bold",
    marginBottom:20
  },

  dealItem:{
    width:(dimension/2)-45,
    marginBottom:5
  }
})