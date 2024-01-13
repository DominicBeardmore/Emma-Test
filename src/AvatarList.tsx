import React, { useEffect, useRef } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Avatar from './Avatar'

const AvatarList = ({ setY, x } : { setY : Function, x : number} ) => {
    const scrollRef = useRef()

    useEffect(() => {
      const scroll = () => {
        scrollRef.current.scrollTo({
          x: x,
          y: 0
        })
      }
      scroll()
    }, [x])
  

    const scrollVert = () => {
        setY()
    }

  return (
    <ScrollView 
        style={styles.listBox} 
        horizontal 
        onScroll={() => scrollVert()}
        ref={scrollRef}
        >
        <Avatar avatar={"AllanMunger"}/>
        <Avatar avatar={"AmandaBrady"}/>
        <Avatar avatar={"AllanMunger"}/>
        <Avatar avatar={"AmandaBrady"}/>
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