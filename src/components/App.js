import React, { Fragment, useEffect } from 'react';
import { get } from 'utils/requests';

import { Home } from 'components/Home/Home';
import { Phone } from 'components/phone/Phone';
import { Desktop } from 'components/desktop/Desktop';
import { ProxyList } from 'components/proxylist/ProxyList';
import { Extension } from 'components/extension/Extension';
import { Title } from 'components/title/Title';
import Titlebar from 'components/titlebar/Titlebar';

import logo from 'logo.svg';
import styles from 'components/App.module.scss';

function App() {

  useEffect(() => {

    /**
     * Example call to Flask
     * @see /src/utils/requests.js
     * @see /app.py
     */
    setTimeout(() => get(
      'example', // Route
      (response) => alert(response), // Response callback
      (error) => console.error(error) // Error callback
    ), 3000);
  }, []);

  return (
      <Home />
  );
}

export default App;
