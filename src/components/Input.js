import React from 'react'

 class Input extends React.Component{
     constructor(){
         super();
         this.state={
             name:"",
             password:""
         }
         this.send=this.send.bind(this);
     }
     send(){
         console.log(this.state.name)
         console.log(this.state.password)
         this.setState({
             name:"",
             password:""
         })

     }
     handleName=(e)=>{
         console.log(e)
         this.setState({
            [e.target.name]:e.target.value
         })
             
 }
    //   handlepassword=()=>{
    //    this.setState({
    //     password:e.target.value
    //   })
    //  }
     render(){
         return(
             <div>
                <input
                    type="text"
                    name="name" 
                    placeholder="Enter name"        
                    onChange={this.handleName}/>
                 <input 
                     type="text"
                     name="password"
                     placeholder="enter password"
                     onChange={this.handleName}/>
                     <button onClick={this.send}>Send</button>
                {/* <h1>Name from input field</h1>
                 <p>Name:{this.state.name}</p>
                 <p>Password:{this.state.password}</p> */}

             </div>
         )
     }
 }
 export default Input