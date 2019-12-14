import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
const SearchBar = () => {
    const [currentValue, setCurrentValue] = useState("");
    // connect ile aynı işleve sahip dispatch gönderimi
    const dispatch = useDispatch();
    const _onClick = async () => {
        dispatch({ type: 'movie/request' });
        try {

            const result = await fetch(`https://www.omdbapi.com/?s=${currentValue}&apikey=4a3b711b`);
            const res = await result.json();
            dispatch({ type: 'movie/success', data: res.Search });
        }
        catch (error) {
            alert('opps!');
        }


        // fetch().then(result => {
        //     dispatch({ type: 'movie/request' });
        //     result.json().then(res => {
        //         dispatch({ type: 'movie/success', data: res.Search})
        //         console.log(res);
        //     });
        //     // return result.json(); }) .then(res => { console.log(res); });
        // });
    };
    const _onChange = (event) => {
        setCurrentValue(event.target.value);

    };
    return (
        <Fragment>
            <input onChange={_onChange}></input>
            <button onClick={_onClick}>Search!</button>
        </Fragment>
    )
}
//onClick fonksiyonunu çağırdığımız yerde {()=>_onClick} diyerek parametre gönderebiliriz.

//Class Component Mantığı ile 
// class SearchBarClass extends React.Component {
//     constructor(props){
//     super(props);
//     this.state = {
//         currentValue: ""
//     };
//     }
//     _onClick = () => {
//         const { currentValue } = this.state;
//         console.log("currentValueClass:", currentValue);
//     }
//     _onChange = (event) => {
//         this.setState({currentValue: event.target.value
//         });
//     }
//     render() {
//         return(
//         <Fragment>
//             <input onChange={this._onChange}></input>
//             <button onClick={this._onClick}>Search!</button>
//         </Fragment>
//         )
//     }
// }
//Buradan hangisinin adı verilirse o çalışır.
//export default connect()(SearchBar);
export default SearchBar;