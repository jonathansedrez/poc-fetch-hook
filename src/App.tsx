import React, { useState } from 'react';
import Get from './screens/get/get';

const Screens = {
  get: <Get />,
}

enum Routes {
  GET = 'get',
}

const App = () => {

  const [currentRoute, setCurrentRoute] = useState<Routes>(Routes.GET);
  return (
    <div>
      <button onClick={() => setCurrentRoute(Routes.GET)}>Get requests</button>
      {Screens[currentRoute]}
    </div>
  );
}

export default App;
