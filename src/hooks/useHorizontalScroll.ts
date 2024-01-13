import { useState } from "react"

const useHorizontalScroll = () => {
    const [x, setX] = useState(0)

    return { x, setX }
}

export default useHorizontalScroll