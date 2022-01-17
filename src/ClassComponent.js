import React from 'react'
class ClassComponent extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <p> Bhanu Deekshita</p>
            </div>
        )
    }
}
export default ClassComponent;



// function ClassComponent(props){
    // console.log(props.name)
    // return(
        // <div>
            {/* <p>functional component</p> */}
        {/* </div> */}
    // )
// }