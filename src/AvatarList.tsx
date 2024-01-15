import React, { useContext, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Avatar from './Avatar'
import { State } from './types/interfaces'
import { SelectedContext, SelectedDispatchContext } from './contexts/SelectedContext'

const AvatarList = ({ hRef } : { hRef: Ref} ) => {
  const dispatch = useContext(SelectedDispatchContext);
  const state = useContext(SelectedContext);

    useEffect(() => {
      const scroll = () => {
        hRef?.current?.scrollTo({ x: state.x })
      }
      scroll()

    }, [state.index])

  return (
    <ScrollView 
      style={styles.listBox} 
      horizontal
      scrollEnabled
      ref={hRef}
      snapToAlignment="center"
      decelerationRate="fast"
      snapToInterval={100}
      scrollEventThrottle={0}
      overScrollMode="never"
    >
        <Avatar avatar={"AllanMunger"} index={0}/>
        <Avatar avatar={"AmandaBrady"} index={1}/>
        <Avatar avatar={"AllanMunger"} index={2}/>
        <Avatar avatar={"AmandaBrady"} index={3}/>
        <Avatar avatar={"AllanMunger"} index={4}/>
        <Avatar avatar={"AmandaBrady"} index={5}/>
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