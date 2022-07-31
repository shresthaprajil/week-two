import React from "react";

class InputComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    componentDidMount() {
        console.log("Input Mounted");
    }

    componentWillUnmount() {
        console.log("Input Unmounting");
    }

    changeTriggered = (event) => {
        console.log(event)
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <>
                <input placeholder={this.props.placeholder} value={this.state.value}
                       onChange={this.changeTriggered}/>
                <div style={{marginTop: '10px'}}>
                    Your Input:
                    <span>{this.state.value}</span>
                </div>
            </>
        );
    }
}

export default InputComponent
