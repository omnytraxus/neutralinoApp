import React, { useEffect } from 'react';
import { os, init } from '@neutralinojs/lib';

const App: React.FC = () => {
  const showDialog = React.useCallback(async () => {
    const result = await os.showMessageBox('Hello', 'Welcome to Neutralino!');
    console.log(result);
  }, []);

  return (
    <div>
      <h1>Neutralino + React + TypeScript</h1>
      <button onClick={showDialog}>
        Show Native Dialog
      </button>
    </div>
  );
};

export default App;