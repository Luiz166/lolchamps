import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/Navbar';
import { Container, Grid } from '@mui/material';
import ChampionCard from '../components/ChampionCard';

const Home = () => {

    const [champions, setChampions] = useState([]);

    const getChampions = () => {
        axios
        .get('http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion.json')
        .then((res) => setChampions(Object.keys(res.data.data)))
        .catch((err) => console.log(err));
    }

    useEffect(() =>{
        getChampions();
    }, []);

  return (
    <div>
        <NavBar/>
        <Container maxWidth='xl'>
            <Grid container>
                {champions.map((champion, index) => {
                    return <Grid key={index} item xs={3}>
                        <ChampionCard name={champion}/>
                    </Grid>
                })};
            </Grid>
        </Container>
    </div>
  )
}

export default Home