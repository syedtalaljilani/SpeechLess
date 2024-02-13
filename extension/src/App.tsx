import { Fragment,useState} from 'react'
import axios from 'axios';
function App() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [question,setQuestion] = useState('')
  const query = question
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
  const sendQueryAndGetSummary = async (query:string) => {
    var vecteraApiEndpoint ='https://api.vectara.io/v1/query'
    try {
      const response = await axios.post(vecteraApiEndpoint, {
        query: "Python",
        apiKey: 'zwt_DFTwJbo_-V-hbfwIHaF-Tu7pFEUnAUgH-VeZ4w', // Include your API key if required
      });
  
      // Assuming the API response contains a 'summary' field
      const summary = response.data.summary;
  
      console.log('Summary:', summary);
    } catch (error:any) {
      console.error('Error:', error.message);
    }
  };
  return (
   <Fragment>
    <div className='w-[300px] h-[500px] overflow-y-auto border-2 border-amber-400 bg-[#1a1a1a] font-mono'>
     <div className='flex justify-center'>
     <img src="./logo.png" alt="" className='w-[30vw]' />
     </div>
     <h1 className='text-2xl text-center text-warning'>Speechless</h1>
     <div className='flex flex-col items-center'>
     <input type="text" placeholder="Type here" name='question' onChange={(e)=>e.target.value} className="input input-bordered w-full max-w-xs" />
     <div className='h-[300px] w-fit'>
     
     </div>
     <div>
     <button className="btn btn-outline btn-warning w-[200px]" onClick={()=>sendQueryAndGetSummary(question)}>Sumaraise Text Text</button>
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
