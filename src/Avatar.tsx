import React, { useContext } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Images } from './Images'
import { SelectedContext, SelectedDispatchContext } from './contexts/SelectedContext';
import { useSyncScrollViewContext } from './contexts/SyncScrollViewContext'

const Avatar = ({ avatar, index } : {
  avatar: string,
  index: number
}) => {
  const SyncScrollViewContext = useContext(useSyncScrollViewContext());

  return (
    <TouchableOpacity style={styles.avatarContainer}
      onPress={() => SyncScrollViewContext.avatarId.setValue(index) }>
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