import React from 'react';
import BanksManegment from './component/BanksManagement/BanksManagement';
import Mortgage from './component/Mortgage/Mortgage';

const App=()=> {
  return (
    <div className="App">
      <BanksManegment/>
      <Mortgage/>
    </div>
  );
}

export default App;
