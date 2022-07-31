import { useEffect } from "react";
import { useCurrentTime } from "../../hooks/useCurrentTime";
import HomeCardComponent from "./components/HomeCard/HomeCardComponent";


const HomePage = () => {
    const date = useCurrentTime()
    useEffect(() => {
    console.log(date);
    }, [date])

        return (
        <div className={'home-wrapper'}>
            Welcome to Home
            <HomeCardComponent/>
        </div>
    )
}

export default HomePage