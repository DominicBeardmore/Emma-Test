import { createContext } from "react";
import { Animated } from "react-native";

export const SyncScrollViewState = {
    activeScrollView: new Animated.Value(0),
    offsetPercentage: new Animated.Value(0)
}

export const SyncScrollViewContext = createContext(SyncScrollViewState)