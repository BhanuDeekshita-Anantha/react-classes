import React from 'react'
class LetterThree extends React.Component{
    constructor(){
       super();
       this.state={
           movie:"RajaRani",
           heroine:"Samantha",
           cartoon:[{killer:"tom and jerry",nobitha:"doramom",colour:"pink"}]
       }
    }
    render(){
        // first two lines from props
        const{name,age}=this.props;
        console.log(this.props)
        // this two line from state
        const{movie,heroine}=this.state;
        console.log(this.state)
        // these lines for state but array
       const{nobitha,colour}=this.state.cartoon[0];
       console.log(nobitha,colour)
        return(
            <div>
               <p>{name} {age}</p>
               <p>{movie}</p>
               <p>{nobitha}</p>
            </div>
        )
    }
}
export default LetterThree