import { Animated, ScrollView, ScrollViewProps } from "react-native";
import { SyncScrollViewContext } from "../contexts/SyncScrollViewContext";
import { useContext, useEffect, useRef, useState } from "react";

interface SyncScrollViewProps extends ScrollViewProps { id: number }

export const SyncedScrollView = (props: SyncScrollViewProps) => {
    const { id, ...rest } = props;
    const { activeScrollView, offsetPercentage } = useContext(SyncScrollViewContext)
    const [scrollViewLength, setScrollViewLength] = useState(0)
    const [contentLength, setContentLength] = useState(0)
    const [scrollableLength, setScrollableLength] = useState(0)
  
    useEffect(() => {
      setScrollableLength(contentLength - scrollViewLength)
    }, [scrollViewLength, contentLength])
  
    const handleLayout = ({ nativeEvent: { layout: { width, height } } }: any) => {
      setScrollViewLength(props.horizontal ? width : height)
    }
  
    const handleContentSizeChange = (width: number, height: number) => {
      setContentLength(props.horizontal ? width : height)
    }

  
    const scrollViewRef = useRef<ScrollView>(null)
  
    offsetPercentage?.addListener(({ value }) => {
      if (id !== activeScrollView._value && scrollableLength > 0) {
        scrollViewRef.current?.scrollTo({ [props.horizontal ? 'x' : 'y']: value * scrollableLength, animated: false })
      }
    })
  
    const offset = new Animated.Value(0)
  
    const handleScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { [props.horizontal ? 'x' : 'y']: offset } } }],
      { useNativeDriver: true }
    )
  
    offset.addListener(({ value }) => {
      if (id === activeScrollView._value && scrollableLength > 0) {
        offsetPercentage.setValue(value / scrollableLength)
      }
    })

    const handleTouchStart = () => {
      activeScrollView.setValue(id)
    }

    return ( 
        <Animated.ScrollView 
            {...rest}
            ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            onTouchStart={handleTouchStart}
            onLayout={handleLayout}
            onContentSizeChange={handleContentSizeChange}
        />
    )
}