import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Avatar from './Avatar'
import { Contact } from '../types/interfaces'
import { SyncedScrollView } from './SyncedScrollView'
const { width } = Dimensions.get('window')

const AvatarList : React.FC<Contact[]> = ({ contacts } : { 
  contacts: Contact[]
} ) => {

  return (
    <SyncedScrollView 
      id={1}
      style={[styles.listBox, { paddingStart: (width * 0.375 ) }]}
      horizontal
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
    >
      { contacts.map(( { image, id } : Contact ) => (
        <Avatar 
          avatar={image} 
          key={id}
          index={id}
        />
      )) }
    </SyncedScrollView>
  )
}
export default AvatarList

const styles = StyleSheet.create({
    listBox: {
      flexDirection: 'row',
      flex: 1
    },
    avatarBox: {
      flex: 1
    }
})