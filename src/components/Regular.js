import React,{PureComponent} from  'react'

//   pure component is not going to render many thing only if there is change in data it will re-render
class Regular extends PureComponent{
    constructor(){
        super();
        this.state={
            choice:"Siri"
        }
    }
    componentDidMount(){
      this.setState({
          choice:"Siri"
      })
    }
    render(){
        console.log("from regular component")
        return(
            <div>
               <p>{this.state.choice}</p>
            </div>
        )
    }
}
export default Regular