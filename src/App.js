import { Card } from './card';
import "./styles/shadows.css"


function App() {
  return (
    <div className="bg-[#d4d4d4] max-h-screen grid place-items-center h-screen">
      <div align="center" className="bg-white rounded-3xl p-shadow-2 w-[90%] h-[90%] lg:w-[50%] lg:h-[75%] grid place-items-center">
        <div className='centrar'><Card></Card></div>
      </div>
    </div>
  );
}

export default App;
