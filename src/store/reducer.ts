import { State } from "../types/interfaces";

export default function reducer(state: State, action: { 
    type: string; payload: { x: number; y: number; index: number}; 
}) {
    switch (action.type) {
      case "update-x":
        return {...state, x: action.payload.x}
      case "update-y":
        return {...state, y: action.payload.y}
      case "select-item":
        const { index } = action.payload
        const newIndex = index ?? 0
        const x = newIndex * 100
        const y = newIndex * 500
        return {
            ...state, 
            x: x,
            y: y, 
            index: index ?? 0
        }
      default:
        return state
    }
  }