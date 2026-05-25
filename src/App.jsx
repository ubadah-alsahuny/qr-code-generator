import './App.css'
import {useState} from "react";
import QRCode from 'qrcode';

function App() {
    const [url, setUrl] = useState('');
    const [qrcode, setQrcode] = useState('');

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 800,
            margin: 2,
            color: {
                dark: '#8A7650',
            }
        }, (error, url) => {
            if (error) {
                console.error(error);
            }
            setQrcode(url);
        })
    }

    return (
      <>
          <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
              <h1>
                  Generate your QR code!
              </h1>
              <h4 style={{width: '45%'}}>
                  Insert a Text or a URL in the input field below, and then click <span>Generate QR Code</span> button
                  to create your QR code.
              </h4>

              <input placeholder={'YOUR TEXT OR URL'}
                     value={url}
                     onChange={(event) => setUrl(event.target.value)} />

              <button onClick={GenerateQRCode}>
                  GENERATE QR CODE
              </button>

              {qrcode ?
                  <div>
                      <div className={'qr-container'}>
                          <img src={qrcode} alt={url}/>
                      </div>
                      <a href={qrcode} download={`${url}.png`}>Download QR code</a>
                  </div>
                  : null}
          </div>
      </>
    )
}

export default App
