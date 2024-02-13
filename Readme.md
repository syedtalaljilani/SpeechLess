<p align="center">
   # SpeechLess (Ai Brower Extension)

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

</p>

<p>
   <h1>SpeechLess</h1>
</p>
<p>
   SpeechLess is a revolutionary browser extension designed for seamless integration across all platforms. With a single click, it effortlessly captures content from videos, texts, or PDFs, converting it into a ChatGPT prompt. This prompt is then used to generate a comprehensive description tailored to the extracted content. Moreover, SpeechLess integrates seamlessly with Vectora, allowing users to utilize its advanced question-answering capabilities. By leveraging the power of AI, users can enhance their browsing experience and unlock insights with unparalleled efficiency and ease.

  <br />
  <br />
  <a href="https://github.com/syedtalaljilani/SpeechLess"><strong>Explore the docs »</strong></a>
  <br />
  <br />
  <!-- <a href="https://storage.googleapis.com/lablab-video-submissions/cljh21tkq000035715n61ieja%2Fraw%2Fsubmission-video-x-cljh21tkq000035715n61ieja-clkf6zdvo00113b6xec0dcr7h.mp4" target="_blank"><img src="https://i.imgur.com/IW6YRNP.png" ></a> -->
  <!-- . -->
  <a href="https://github.com/syedtalaljilani/SpeechLess/issues">Report Bug</a>
  ·
  <a href="https://github.com/syedtalaljilani/SpeechLess/issues">Request Feature</a>
</p>

![NodeJS Version][node-image]

## Setup

1. Install NodeJS 20.11.0 or later.

2. Clone this repository:

   ```bash
   git clone https://github.com/syedtalaljilani/SpeechLess.git
   cd SpeechLess
   ```

3. Go to the server folder

   ```bash
   cd server
   ```

4. Install the required JS packages:

   ```bash
   npm i
   ```

5. Create a `.env` file in the root directory and add your Instagram username and password:

   ```bash
   VECTARAAPI_KEY=
   VECTARA_CORPUS_ID=
   VECTARA_CUSTOMER_ID=
   ```

6. Run the script:

   ```bash
   npm run dev
   ```

7. Open another terminal windows

   ```bash
   cd Extension
   ```

8. Install packages

   ```bash
   npm i
   ```

9. Start the Extention (client-side)

   ```bash
   npm run dev
   ```

## Troubleshooting

If the script is not working as expected, check the following:

- Make sure you've followed all given instruction.
- Check the console for any error messages.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

[node-image]: https://img.shields.io/badge/NodeJS-v20.11+-green.svg
[contributors-shield]: https://img.shields.io/github/contributorssyedtalaljilani/SpeechLess.svg?style=for-the-badge
[contributors-url]: https://github.comsyedtalaljilani/SpeechLess/graphs/contributors
[forks-shield]: https://img.shields.io/github/forkssyedtalaljilani/SpeechLess.svg?style=for-the-badge
[forks-url]: https://github.comsyedtalaljilani/SpeechLess/network/members
[stars-shield]: https://img.shields.io/github/starssyedtalaljilani/SpeechLess.svg?style=for-the-badge
[stars-url]: https://github.comsyedtalaljilani/SpeechLess/stargazers
[issues-shield]: https://img.shields.io/github/issuessyedtalaljilani/SpeechLess.svg?style=for-the-badge
[issues-url]: https://github.comsyedtalaljilani/SpeechLess/issues
