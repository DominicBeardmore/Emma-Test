import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Images } from './Images'

const Avatar = ({ avatar } : { avatar: string }) => {
  return (
    <View style={styles.avatarContainer}>
      <Image source={Images[avatar]} height={100} width={100} resizeMode='contain'/>
    </View>
  )
}

export default Avatar;

const styles = StyleSheet.create({
  avatarContainer: {
    padding: 10,
    width: 100
  }
})