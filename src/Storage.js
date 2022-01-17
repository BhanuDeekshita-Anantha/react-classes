import React from 'react'

// class Storage extends React.Component{
//     state={
//         name:"Bhanu"
//     }
//     render(){
        
//         setTimeout(()=>{
//             this.setState({
//                 name:"Murvez"
//             })
//         },3000)
            
//         return(
//             <div>
//                 {this.state.name}
//             </div>
//         )
//     }
// }
class Storage extends React.Component{
    render(){
        // return(
        //     // <div id="siri">
        //     //    <h1>example value</h1>
        //     // </div>
        // )
        return React.createElement("div",{id:"siri",className:"abc"},React.createElement("h1",null,"ABC"))
    }
}
export default Storage