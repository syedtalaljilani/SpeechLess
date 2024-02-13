import { Fragment} from 'react'
import axios from 'axios'
function App() {
  var serverUrl = 'http://localhost:3000/get-url'
   async function  onClickHandler(){
    var url = window.location.href;
     await axios.post(serverUrl,{"url":url});
  }
  return (
   <Fragment>
    <div className='w-[300px] h-[500px] overflow-y-auto border-2 border-amber-400 bg-[#1a1a1a] font-mono'>
     <div className='flex justify-center'>
     <img src="./logo.png" alt="" className='w-[30vw]' />
     </div>
     <h1 className='text-2xl text-center text-warning'>Speechless</h1>
     <div className='flex justify-center items-end'>
     <div className='h-[300px]'></div>
     <button className="btn btn-outline btn-warning w-[200px]" onClick={onClickHandler}>Analysis Text</button>
     </div>
    </div>
    
   </Fragment>
  )
}

export default App
