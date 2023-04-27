import axios from 'axios'
import React, { useState } from 'react'
import NavBar from '../components/Navbar';

const Home = () => {

    const [champions, setChampions] = useState;

    axios
    .get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
    .then((res) => (Object.keys(res.data.data)))
    .catch((err) => console.log(err));

  return (
    <NavBar/>
  )
}

export default Home