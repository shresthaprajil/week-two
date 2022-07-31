import {Button, InputComponent} from "../../../../components";
import './style.css'

const HomeCardComponent = () => {
    return (
        <div className={'home-card'}>
            <InputComponent/>
            <Button text="Hello"/>
        </div>
    )
}

export default HomeCardComponent