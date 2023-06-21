import './index.css'
import test from './Image/alpaca/backgrounds/blue70.png'
const Image = () => {
  // var image = require('./alpaca-generator-assets/backgrounds/blue70.png')
  return <div className='border'>
    <h1>
    Image section
    </h1>
    <div className='Image'>
    <img src={test} alt="Image not found"/>
    </div>
    </div>;
};

const Option = () => {
  return (
    <div className='border Buttons'>
      <h1>
        Option section
      </h1>
      <div className='space'>
      <button>Hair</button>
      <button>Ears</button>
      <button>Mouth</button>
      <button>Eyes</button>
      <button>Neck</button>
      <button>Leg</button>
      <button>Accessories</button>
      <button>Background</button>
      </div>
    </div>
  )
};

function App() {
  return (
    <div>
      <h1>Alpaca Generator</h1>
      <div className='bodies'>
      <Image></Image>
      <Option></Option>
      </div>
      </div>
  );
}

export default App;
