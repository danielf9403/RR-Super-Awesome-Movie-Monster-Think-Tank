import React, { Suspense } from 'react';
import './App.css';
import Loader from 'react-loader-spinner';
 

function App() {
  const AboutUs = React.lazy(() => import('./components/AboutUs'))
  const Packages = React.lazy(() => import('./components/Packages'))


return (
    <div className="App">
      <div>
        <Suspense fallback={<Loader 
            type="Bars" 
            color="#FF00FF" 
            height={200} 
            width={200} 
            style={{margin: "0 auto"}}/>}>
          <h1>Hello World</h1>
        </Suspense>
      </div>
    </div>
  );
}

export default App;