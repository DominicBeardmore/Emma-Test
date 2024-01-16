import React, { useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Avatar from './Avatar'
import { Contact } from './types/interfaces'
import { SyncedScrollView } from './components/SyncedScrollView'
const {height, width} = Dimensions.get('window')

const AvatarList = ({ contacts } : { 
  contacts: Contact[]
} ) => {

  return (
    <SyncedScrollView 
      id={1}
      style={[styles.listBox, { paddingLeft: (width / 2) - 50 }]}
      horizontal
      snapToAlignment="center"
      scrollEventThrottle={16}
      decelerationRate={'fast'}
      snapToInterval={width * 0.25} 
      showsHorizontalScrollIndicator={false}
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