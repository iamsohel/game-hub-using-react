import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './components/GenreList/types'
import { Platform } from './components/GameGrid/types'
import PlatformSelector from './components/PlatformSelector/PlatformSelector'
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{ base: '1lfr', lg: '200px 1fr' }}
    >
      <GridItem area='nav'><NavBar /></GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}><GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} /></GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
