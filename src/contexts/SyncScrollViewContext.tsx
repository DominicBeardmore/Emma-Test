import { createContext } from "react";
import { Animated } from "react-native";

export const SyncScrollViewState = {
    activeScrollView: new Animated.Value(0),
    offsetPercentage: new Animated.Value(0),
    avatarId: new Animated.Value(0)
}

const SyncScrollViewContext = createContext(SyncScrollViewState)

export const useSyncScrollViewContext = ()  => { return  SyncScrollViewContext }