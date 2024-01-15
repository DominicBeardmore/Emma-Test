import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Avatar from './Avatar'
import { State } from './types/interfaces'
import { SelectedContext, SelectedDispatchContext } from './contexts/SelectedContext'
import { SyncedScrollView } from './components/SyncedScrollView'

const AvatarList = ({ hRef } : { hRef: Ref} ) => {
  const [avatarId, setAvaterId] = useState(0)

  return (
    <SyncedScrollView 
      id={1}
      style={styles.listBox} 
      horizontal
      onTouchAvatar={setAvaterId}
      snapToAlignment="center"
      scrollEventThrottle={16}
    >
        <Avatar avatar={"AllanMunger"} index={0}/>
        <Avatar avatar={"AmandaBrady"} index={1}/>
        <Avatar avatar={"AllanMunger"} index={2}/>
        <Avatar avatar={"AmandaBrady"} index={3}/>
        <Avatar avatar={"AllanMunger"} index={4}/>
        <Avatar avatar={"AmandaBrady"} index={5}/>
    </SyncedScrollView>
  )
}
export default AvatarList

const styles = StyleSheet.create({
    listBox: {
        flexDirection: 'row',
        flex: 5
    }
})