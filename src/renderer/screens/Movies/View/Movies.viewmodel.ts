import { useEffect, useState } from 'react';
import useRootStack from '@navigation/useRootStack';
import { Movie, SegmentedTags } from 'src/renderer/models/responses';
import { normalizeItem } from 'src/renderer/util/helpers/common';
import { Collection } from 'src/renderer/models/responses/Collection';

interface MoviesData {
  currentMovieList: Movie[];
  selectedMovie: Movie | null;
  isEditModalOpen: boolean;
  tags: SegmentedTags;
  collections: Collection[];
}
interface MoviesActions {
  editMovie: (movie: Movie) => void;
  deleteMovie: (movie: Movie) => void;
  saveMovie: (movie: Movie) => void;
  removeMovie: (movie: Movie) => void;
  pinMovie: (movie: Movie) => void;
  addMovies: () => void;
  searchMovies: (searchTerm: string) => void;
}

export interface MoviesViewModel extends MoviesData, MoviesActions {}

const useMoviesViewModel = (
  navigate: ReturnType<typeof useRootStack>,
): MoviesViewModel => {
  const [currentMovieList, setCurrentMovieList] = useState<Movie[]>([]);
  const [isEditModalOpen, setEditModalState] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [pinnedMovies, setPinnedMovies] = useState<Movie[]>([]);

  const calculateSize = (obj: any): string => {
    const bytes = new TextEncoder().encode(JSON.stringify(obj)).length;
    const kB = bytes / 1024;
    const mB = kB / 1024;
    const gB = mB / 1024;

    return `${bytes.toFixed(2)} bytes / ${kB.toFixed(2)} KB / ${mB.toFixed(2)} MB / ${gB.toFixed(2)} GB`;
  };

  const tags: SegmentedTags = {
    EraTags: ['1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    GenreTags: [
      'Action',
      'Adventure',
      'Comedy',
      'Drama',
      'Fantasy',
      'Horror',
      'Mystery',
      'Romance',
      'Sci-Fi',
      'Thriller',
      'Political',
      'Space Opera',
      'Superhero',
      'Western',
    ],
    SpecialtyTags: ['Star Wars', 'Toonami'],
    AgeGroupTags: ['Kids', 'Family', 'Young Adult', 'Mature', 'All Ages'],
    HolidayTags: ['Christmas', 'Halloween'],
  };

  const collections: Collection[] = [
    {
      id: '1',
      title: 'Star Wars',
      description: 'A collection of Star Wars movies',
      items: [],
    },
    {
      id: '2',
      title: 'Marvel Cinematic Universe',
      description: 'A collection of Marvel movies',
      items: [],
    },
    {
      id: '3',
      title: 'James Bond',
      description: 'A collection of James Bond movies',
      items: [],
    },
    {
      id: '4',
      title: 'Harry Potter',
      description: 'A collection of Harry Potter movies',
      items: [],
    },
  ];

  useEffect(() => {
    console.log('Current movie list size:', calculateSize(currentMovieList));
  }, [currentMovieList]);

  const addMovies = async () => {
    const filePaths: string[] =
      await window.electron.ipcRenderer.invoke('open-file-picker');
    console.log('File paths:', filePaths);
    if (filePaths.length > 0) {
      const newMovies = filePaths.map((moviePath: string) => ({
        id: normalizeItem(moviePath),
        Path: moviePath,
        Tags: [],
      }));

      setCurrentMovieList((prev) => [...prev, ...newMovies]);
    }
  };

  const editMovie = (movie: Movie) => {
    if (isEditModalOpen) {
      setEditModalState(false);
      return;
    }

    const movieToEdit = currentMovieList.find((m) => m.id === movie.id);
    if (!movieToEdit) {
      console.error('Movie not found:', movie);
      return;
    }
    setSelectedMovie(movieToEdit);
    setEditModalState(true);
    console.log('Editing movie:', movie);
  };

  const saveMovie = (movie: Movie) => {
    console.log('Saving movie:', movie);
  };

  const searchMovies = (searchTerm: string) => {
    //TODO: Implement search movies
    console.log('Searching movies:', searchTerm);
  };

  const removeMovie = (movie: Movie) => {
    setCurrentMovieList((prev) => prev.filter((m) => m !== movie));
    console.log('Removing movie:', movie);
  };

  const deleteMovie = (movie: Movie) => {
    //TODO: Implement delete movie
    // await for confirmation. If the movied doesnt delete
    // dont remove from the list

    setCurrentMovieList((prev) => prev.filter((m) => m !== movie));
    console.log('Deleting movie:', movie);
  };

  const pinMovie = (movie: Movie) => {
    if (pinnedMovies.includes(movie)) {
      setPinnedMovies((prev) => prev.filter((m) => m !== movie));
    } else {
      setPinnedMovies((prev) => [...prev, movie]);
    }
    console.log('Pinning movie:', movie);
  };

  return {
    currentMovieList,
    selectedMovie,
    isEditModalOpen,
    tags,
    collections,
    editMovie,
    deleteMovie,
    saveMovie,
    removeMovie,
    pinMovie,
    addMovies,
    searchMovies,
  };
};

export default useMoviesViewModel;
