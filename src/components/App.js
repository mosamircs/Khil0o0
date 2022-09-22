import React, { useEffect } from 'react';
import { get } from 'utils/requests';

import { Home } from 'components/home/Home';
// import { Phone } from 'components/phone/Phone';
// import { Desktop } from 'components/desktop/Desktop';
// import { ProxyList } from 'components/proxylist/ProxyList';
// import { Extension } from 'components/extension/Extension';
// import { Title } from 'components/title/Title';

function App() {

  useEffect(() => {
    setTimeout(() => get(
      'example', // Route
      (response) => alert(response), // Response callback
      (error) => console.error(error) // Error callback
    ), 3000);
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
}
export default App;