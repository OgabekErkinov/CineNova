import { useEffect, useState } from "react"

export const useDebounce = (value, delay = 1500) => { 
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const time = setTimeout(() => setDebounceValue(value), delay)

        return () => clearTimeout(time) 
    }, [value, delay])

    return { debounceValue }
}
