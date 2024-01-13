import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Avatar from './Avatar'

const AvatarList = () => {
  return (
    <ScrollView style={styles.listBox} horizontal>
        <Avatar avatar={"AllanMunger"}/>
        <Avatar avatar={"AmandaBrady"}/>
    </ScrollView>
  )
}
export default AvatarList

const styles = StyleSheet.create({
    listBox: {
        flexDirection: 'row',
        flex: 5
    }
})