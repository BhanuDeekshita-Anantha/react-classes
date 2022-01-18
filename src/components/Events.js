import React from 'react'

class Events extends React.Component{
     state={
         username:"",
         password:""

     }
     action=()=>{
         this.setState({
             username:"bhanu",
             password:"siri123"
         })
     }
     render(){
         return(
             <div>
               <h1>Email</h1>
               <p>Username:{this.state.username}</p>
               <p>Password:{this.state.password}</p>
               <button onClick={this.action}>Submit</button>
             </div>
         )
     }
}
export default Events;