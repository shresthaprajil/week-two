import { useEffect, useState } from "react"

const useCurrentTime = () => {
    const newDate = new Date()
    const [day, setDay] = useState(null)

    useEffect(() => {
        setDay(newDate)
    }, [])

    return (`Today is ${day}`)
}

export { useCurrentTime }