import React, {Fragment,useState} from "react"; 

//Function Component
const SearchBar = () =>{
    const [currentValue, setCurrentValue] = useState("");
    const _onClick = () => {
        console.log("currentValue Function Component:",currentValue);
    };
    const _onChange = (event) =>{
        setCurrentValue(event.target.value);
    };
    return(
        <Fragment>
            <input onChange ={_onChange}/>
            <button onClick={_onClick}>Search</button>
        </Fragment>
    );

};
//Class Component
/*
class SearchBarClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            currentValue:""
        };
    }
    _onClick = () => {
        const{currentValue} = this.state;
        console.log("currentValue Class Component:", currentValue);

    }
    _onChange = (event)=>{
        this.setState({currentValue: event.target.value})
    }

    render(){
        return (
            <Fragment>
            <input onChange ={this._onChange}/>
            <button onClick={this._onClick}>Search</button>
        </Fragment>
        );
    }

}*/
export default SearchBar;