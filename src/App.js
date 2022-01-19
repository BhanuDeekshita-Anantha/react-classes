
import FunComp from './FunComp';
import Storage from './Storage';
import Constructor from './Constructor';
import LetterThree from './components/LetterThree'
import Events from './components/Events'
import Input from './components/Input'
{/*import React from 'react';
import ClassComponent from './ClassComponent';

function App() {
  return (
    <div>
    <ClassComponent name="murvez" age="22"/>
    <ClassComponent name="priya" age="21"/>
    <ClassComponent name="manisha" age="23"/>
    <ClassComponent name="jaya" age="22"/>
    </div>
  );
}
*/
}
function App(){
  return (
    <div>
      <Input/>
      {/* <FunComp name="bhanu" age="22"/>
      <FunComp name="murvez" age="21"/>
      <FunComp name="priya" age="21"/> */}
      { /*<LetterThree name="siri" age="23" say="I will not say the letter"/>  */}
     {/* <Events/> */}
    </div>
  );
}
export default App
