import React, { useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Avatar from './Avatar'
import { State } from './types/interfaces'

const AvatarList = ({ dispatch, state, hRef } : { 
    state: State
    dispatch: any,
    hRef: Ref
  } ) => {

    useEffect(() => {
      const scroll = () => {
        hRef?.current?.scrollTo({ x: state.x })
      }
      scroll()  
    }, [state.index])

    const scrollVert = (event: { nativeEvent: { contentOffset: { x: number } } }) => {
        const index = (event.nativeEvent.contentOffset.x / 500)
        dispatch({
          type: 'select-item',
          payload: { index: Math.floor(index)  }
        })
    }

  return (
    <ScrollView 
      style={styles.listBox} 
      horizontal 
    //  onScroll={scrollVert}
      ref={hRef}
      snapToAlignment="center"
      decelerationRate="fast"
      snapToInterval={100}
      scrollEventThrottle={0}
      overScrollMode="never"
    >
        <Avatar dispatch={dispatch} index={0} avatar={"AllanMunger"}/>
        <Avatar dispatch={dispatch} index={1} avatar={"AmandaBrady"}/>
        <Avatar dispatch={dispatch} index={2} avatar={"AllanMunger"}/>
        <Avatar dispatch={dispatch} index={3} avatar={"AmandaBrady"}/>
        <Avatar dispatch={dispatch} index={4} avatar={"AllanMunger"}/>
        <Avatar dispatch={dispatch} index={5} avatar={"AmandaBrady"}/>
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