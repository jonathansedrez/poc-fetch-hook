import React, { useState } from 'react';
import Get from './screens/get/get';
import Home from './screens/home/home';

const Screens = {
  home: <Home />,
  get: <Get />,
}

enum Routes {
  HOME = 'home',
  GET = 'get',
}

const App = () => {

  const [currentRoute, setCurrentRoute] = useState<Routes>(Routes.HOME);
  return (
    <div>
      <button 
        className={currentRoute === Routes.HOME ? '--active' : ''}
        onClick={() => setCurrentRoute(Routes.HOME)}
      >
        Home
      </button>
      <button 
        className={currentRoute === Routes.GET ? '--active' : ''}
        onClick={() => setCurrentRoute(Routes.GET)}
      >
        Get requests
      </button>
      {Screens[currentRoute]}
    </div>
  );
}

export default App;
