import React, { useContext } from 'react'
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Images } from './Images'
import { useSyncScrollViewContext } from './contexts/SyncScrollViewContext'
const {height, width} = Dimensions.get('window')

const Avatar = ({ avatar, index } : {
  avatar: string,
  index: number
}) => {
  const SyncScrollViewContext = useContext(useSyncScrollViewContext());

  return (
    <TouchableOpacity style={[styles.avatarContainer, {width: width * 0.25}]}
      onPress={() => SyncScrollViewContext.avatarId.setValue(index) }>
      <Image source={Images[avatar]} height={100} width={100} resizeMode='contain'/>
    </TouchableOpacity>
  )
}

export default Avatar;

const styles = StyleSheet.create({
  avatarContainer: {
    padding: 10,
    alignItems: 'center'
  }
})