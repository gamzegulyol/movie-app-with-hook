import React, {Fragment,useState} from "react"; 
import {connect,useDispatch} from 'react-redux';
<<<<<<< HEAD
import { dispatch } from "../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs";
=======
>>>>>>> first commit

//Function Component
const SearchBar = () =>{
    const [currentValue, setCurrentValue] = useState("");
    const _onClick = () => {
       fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then(result=>{
           result.json().then(res =>{
<<<<<<< HEAD
               dispatch({type:'movie/request'});
=======
>>>>>>> movielist component has created
            console.log("currentValue Function Component:",res);
           });
          
        });
  
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
<<<<<<< HEAD
export default connect()(SearchBar);
=======
export default connect()(SearchBar);
>>>>>>> first commit
