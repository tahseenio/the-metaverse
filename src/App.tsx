import React, { useEffect } from 'react';
import { Header } from './components/Header';
import axios from 'axios';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const { data }: any = await axios.get(
        'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x250fa051e0945C576eed5B1e08c50679bD1e29F6&order_direction=desc&offset=0&limit=20'
      );
      // console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
