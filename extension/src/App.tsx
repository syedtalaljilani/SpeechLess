import { Fragment,useState} from 'react'
import axios from 'axios';
function App() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  const handleClick = () => {
    // Send a message to the background script to request the current URL
    chrome.runtime.sendMessage({ type: 'GET_CURRENT_URL' }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        // Handle the error here, for example, by showing an error message
      } else if (response && response.url) {
          setCurrentUrl(response.url)
        // Assuming you have imported axios library
        axios.post('http://localhost:3000/get-url', { url: response.url })
          .then((axiosResponse) => {
            // Handle the response from the backend if needed
            console.log('URL sent to backend successfully',axiosResponse);
          })
          .catch((error) => {
            console.error('Error sending URL to backend:', error);
            // Handle the error here, for example, by showing an error message
          });
      } else {
        console.error('Invalid response received');
        // Handle the error here, for example, by showing an error message
      }
    });
  };
  
  return (
   <Fragment>
    <div className='w-[300px] h-[500px] overflow-y-auto border-2 border-amber-400 bg-[#1a1a1a] font-mono'>
     <div className='flex justify-center'>
     <img src="./logo.png" alt="" className='w-[30vw]' />
     </div>
     <h1 className='text-2xl text-center text-warning'>Speechless</h1>
     <div className='flex flex-col items-center'>
     <div className='h-[300px] w-fit'>
     <p className='text-white '>{currentUrl}</p>
     </div>
     <div>
     <button className="btn btn-outline btn-warning w-[200px]" onClick={handleClick}>Analysis Text</button>
     </div>
     
     </div>
    </div>
    
   </Fragment>
  )
}

export default App
