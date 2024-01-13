import { useState } from "react"

const useVerticalScroll = () => {
    const [y, setY] = useState(0)

    return { y, setY }
}

export default useVerticalScroll