import { useCallback, useState } from 'react';

import { MemoizedSideBar } from './components/SideBar';
import { MemoizedContent } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MemoizedSideBar
        selectedGenreId={selectedGenreId}
        buttonClickCallback={handleClickButton}
      />

      <MemoizedContent selectedGenreId={selectedGenreId} />
    </div>
  )
}