import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import Avatar from './Avatar'
import { Contact, State } from './types/interfaces'
import { SelectedContext, SelectedDispatchContext } from './contexts/SelectedContext'
import { SyncedScrollView } from './components/SyncedScrollView'
const {height, width} = Dimensions.get('window')

const AvatarList = ({ hRef, contacts } : { 
  hRef: Ref, 
  contacts: Contact[]
} ) => {
  const [avatarId, setAvaterId] = useState(0)

  return (
    <SyncedScrollView 
      id={1}
      style={[styles.listBox, { paddingHorizontal: ( width / 2) - 50} ]} 
      horizontal
      onTouchAvatar={setAvaterId}
      snapToAlignment="center"
      scrollEventThrottle={16}
      decelerationRate={'fast'}
      snapToInterval={width * 0.25}
    >
        { contacts.map(( { image, id } : Contact ) => (
          <Avatar avatar={image} key={id} index={id}/>
        )) }

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