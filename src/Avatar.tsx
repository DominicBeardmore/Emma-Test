import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Images } from './Images'

const Avatar = ({ avatar, dispatch, index } : {
  avatar: string,
  dispatch : Function,
  index : number,
}) => {

  return (
    <TouchableOpacity style={styles.avatarContainer}
      onPress={() =>  {
        dispatch({
          type: 'select-item',
          payload: { index: Math.floor(index) }
        })
      }}>
      <Image source={Images[avatar]} height={100} width={100} resizeMode='contain'/>
    </TouchableOpacity>
  )
}

export default Avatar;

const styles = StyleSheet.create({
  avatarContainer: {
    padding: 10,
    width: 100,
    alignItems: 'center'
  }
})