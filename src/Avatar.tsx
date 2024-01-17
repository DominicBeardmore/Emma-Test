import React, { useContext } from 'react'
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Images } from './Images'
import { useSyncScrollViewContext } from './contexts/SyncScrollViewContext'
const {width} = Dimensions.get('window')

const Avatar : React.FC<any> = ({ avatar, index } : {
  avatar: string,
  index: number
}) => {
  const SyncScrollViewContext = useContext(useSyncScrollViewContext());
  return ( 
    <TouchableOpacity style={[styles.avatarContainer, { width: width * 0.25 }]}
      onPress={() =>
        SyncScrollViewContext.avatarId.setValue(index) 
      }>
      <Image source={Images[avatar]} height={100} width={100} style={index == SyncScrollViewContext.avatarId._value ? styles.halo : null } resizeMode='contain'/>
    </TouchableOpacity>
  )
}

export default Avatar;

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  halo: {
    borderWidth: 5,
    borderColor: "lightblue",
    borderRadius: 100
  }
})