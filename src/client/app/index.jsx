import React, {useEffect}from 'react';
import Main from "../pages/main";
import "./app.css"
import {connect} from "react-redux";
import {setInitOptions, setInitPlaces} from "../store/reducers/SetInitState"
import {setInitialOptions} from "../store/reducers/mainPageReducer";


class App extends React.Component{

    componentDidMount(){
        this.props.setInitState();
    }

    render() {
        return(
            <div className="App">
                <Main store={this.props.store}/>
            </div>
        )
    }

}


export default connect(
    state =>({
        state:state
    }),
    dispatch => ({
        setInitState: () => {
            dispatch(setInitOptions());
            dispatch(setInitPlaces())
        }
    })
)(App);


