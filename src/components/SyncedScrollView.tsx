import { Animated, Dimensions, ScrollView, ScrollViewProps } from "react-native";
import { useSyncScrollViewContext } from "../contexts/SyncScrollViewContext";
import { useContext, useEffect, useRef, useState } from "react";
const {height, width} = Dimensions.get('window')

interface SyncScrollViewProps extends ScrollViewProps { 
  showsVerticalScrollIndicator?: boolean,
  showsHorizontalScrollIndicator?: boolean,
  id: number, 
  onTouchAvatar?: Function }

export const SyncedScrollView = (props: SyncScrollViewProps) => {
    const { id, onTouchAvatar, ...rest } = props;
    const ScrollViewProviderContext = useContext(useSyncScrollViewContext())
    const { activeScrollView, offsetPercentage, avatarId } = ScrollViewProviderContext

    const [scrollViewLength, setScrollViewLength] = useState(0)
    const [contentLength, setContentLength] = useState(0)
    const [scrollableLength, setScrollableLength] = useState(0)
  
    function roundToWidth(number: number) {
      const rounded = Math.round(number * 4) / 4;
      return rounded;
    }

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

    avatarId.addListener(( ) => {
        scrollViewRef.current?.scrollTo({ [props.horizontal ? 'x' : 'y']: avatarId._value / 28 * scrollableLength, animated: false })
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
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onTouchStart={handleTouchStart}
        onLayout={handleLayout}
        onContentSizeChange={handleContentSizeChange}
      />
    )
}