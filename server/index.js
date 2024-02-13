import { PuppeteerWebBaseLoader } from "langchain/document_loaders/web/puppeteer";
import { VectaraStore } from "@langchain/community/vectorstores/vectara";
import cors from "cors"
import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
import 'dotenv/config'
// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors({
  origin:'http://localhost:5173'
}))
app.use(express.urlencoded({ extended: true }));

// Create the Vectara store.
const store = new VectaraStore({
    customerId: Number(process.env.VECTARA_CUSTOMER_ID),
    corpusId: Number(process.env.VECTARA_CORPUS_ID),
    apiKey: String(process.env.VECTARA_API_KEY),
    verbose: true,
  });

  app.post('/get-url', async (req, res) => {
     const url = req.body.url;
  
    // Perform actions with the URL, e.g., fetch data
     try {
      // Your code here to fetch data or perform actions with the URL
      if (!url) {
      
        return res.status(400).json({ error: 'URL not provided' });
        
      }
      else{
        
        console.log('Received URL:', url);
        const loader = new PuppeteerWebBaseLoader(url);

        const docs = await loader.load();
        console.log(docs)

  // //step2: stroing the data in vectara
  // const doc_ids = await store.addDocuments(docs);
      }
  
      // Example response if the URL is successfully processed
      
    } catch (error) {
      console.error('Error processing URL:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// app.get('/api',async(req,res)=>{
//   res.json({
//     name:'Syed Talal Jilani'
//   })
// })
// // POST endpoint to receive URL
// app.post('/get-url', async(req, res) => {

//   const url = req.text()
//   console.log(url)

//   // if (url == '') {
//   //   return res.status(400).json({ error: 'URL not provided' });
//   // }

//   // // Do something with the URL (e.g., fetch data from the URL)
//   // console.log('Received URL:', url);

//   //step 1: Scrape the data
//   const loader = new PuppeteerWebBaseLoader(body);

//   const docs = await loader.load();
//   console.log(docs)

  //step2: stroing the data in vectara
//   const doc_ids = await store.addDocuments(docs);


//   //step 3:Perform a similarity search.
//     const resultsWithScore = await store.similaritySearchWithScore(
//     "What were the women talking about?",
//     1,
//     {
//       lambda: 0.025,
//     }
//   );
  
//   // Print the results.
//   console.log(JSON.stringify(resultsWithScore, null, 2));
//   // Respond with a success message
//   res.json({ message: 'URL received successfully' });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});