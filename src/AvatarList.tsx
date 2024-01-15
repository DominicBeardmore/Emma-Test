import React, { useContext, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Avatar from './Avatar'
import { State } from './types/interfaces'
import { SelectedContext, SelectedDispatchContext } from './contexts/SelectedContext'
import { SyncedScrollView } from './components/SyncedScrollView'

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
    <SyncedScrollView 
      id={1}
      style={styles.listBox} 
      horizontal
      scrollEnabled
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