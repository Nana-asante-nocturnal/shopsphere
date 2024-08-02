import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import {data} from '../data/CarouselData'

const CarouselCard = () => {
  return (
    <View>
        <SliderBox 
        resizeMode="cover" 
        images={data} 
        autoplay={true} 
        autoPlayInterval={100} 
        sliderBoxHeight={225}
        dotColor="#02c3d9"
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: "rgba(128, 128, 128, 0.92)",
            borderColor:"gray",
            borderWidth:1,

          }}
        />
    </View>
  )
}

export default CarouselCard

const styles = StyleSheet.create({
 
})