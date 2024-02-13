import { YoutubeLoader } from "langchain/document_loaders/web/youtube";
import { VectaraStore } from "@langchain/community/vectorstores/vectara";
import cors from "cors"
import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
import 'dotenv/config'


app.use(bodyParser.json());
app.use(cors({
  origin:'http://localhost:5173'
}))
app.use(express.urlencoded({ extended: true }));


const store = new VectaraStore({
    customerId: Number(process.env.VECTARA_CUSTOMER_ID),
    corpusId: Number(process.env.VECTARA_CORPUS_ID),
    apiKey: String(process.env.VECTARA_API_KEY),
    verbose: true,
  });

  app.post('/get-url', async (req, res) => {
     const url = req.body.url;

     try {

      if (!url) {
      
        return res.status(400).json({ error: 'URL not provided' });
        
      }
      else{
        
        console.log('Received URL:', url);
        const loader = YoutubeLoader.createFromUrl(url, {
          language: "en",
          addVideoInfo: true,
        });

        const docs = await loader.load();
        console.log(docs)
        //step2: stroing the data in vectara
         const doc_ids = await store.addDocuments(docs);
         const resultsWithScore = await store.similaritySearchWithScore(
           "What is the difrence between senior and junior developer",
             1,
            {
               lambda: 0.025,
             }
           );
     
          console.log(JSON.stringify(resultsWithScore, null, 2));
      }
      
    } catch (error) {
      console.error('Error processing URL:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});