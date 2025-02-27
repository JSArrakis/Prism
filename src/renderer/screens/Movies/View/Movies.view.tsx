import { FC } from 'react';
import { MoviesViewModel } from './Movies.viewmodel';
import styles from './Movies.module.css';
import MediaItemList from '../../../components/MediaItemList/MediaItemList';
import { MediaItem } from '../../../models/responses/MediaItem';
import { Movie } from '../../../models/responses/Movie';

interface MoviesViewProps {
  viewModel: MoviesViewModel;
}

const MoviesView: FC<MoviesViewProps> = ({ viewModel }) => {
  const convertMovieToMediaItem = (movie: Movie): MediaItem => {
    return {
      id: movie.id,
      title: movie.Title,
      loadTitle: movie.LoadTitle,
      alias: movie.Alias,
      imdb: movie.IMDB,
      tags: movie.Tags,
      path: movie.Path,
      duration: movie.Duration,
      durationLimit: movie.DurationLimit,
    };
  };

  const convertMediaItemToMovie = (mediaItem: MediaItem): Movie => {
    return {
      id: mediaItem.id,
      Title: mediaItem.title,
      LoadTitle: mediaItem.loadTitle,
      Alias: mediaItem.alias,
      IMDB: mediaItem.imdb,
      Tags: mediaItem.tags,
      Path: mediaItem.path,
      Duration: mediaItem.duration,
      DurationLimit: mediaItem.durationLimit,
    };
  };

  const currentMediaItemList: MediaItem[] = viewModel.currentMovieList.map(
    convertMovieToMediaItem,
  );

  const handleEdit = (movie: MediaItem) => {
    viewModel.editMovie(convertMediaItemToMovie(movie));
  };

  const saveMovie = (movie: MediaItem) => {
    viewModel.saveMovie(convertMediaItemToMovie(movie));
  };

  const handleRemove = (movie: MediaItem) => {
    viewModel.removeMovie(convertMediaItemToMovie(movie));
  };

  const handlePin = (movie: MediaItem) => {
    viewModel.pinMovie(convertMediaItemToMovie(movie));
  };

  const handleDelete = (movie: MediaItem) => {
    viewModel.deleteMovie(convertMediaItemToMovie(movie));
  };

  const handleAddMovie = () => {
    viewModel.addMovies();
  };

  const handleSearchMovies = (searchTerm: string) => {
    viewModel.searchMovies(searchTerm);
  };

  const selectedMovie = viewModel.selectedMovie
    ? convertMovieToMediaItem(viewModel.selectedMovie)
    : { id: '', title: '', path: '', tags: [] };

  return (
    <div className={styles.screen}>
      <h1>Movies</h1>
      <div className={styles.mainContent}>
        <div className={styles.formTop}>
          <div id="movieFormTopContainer">
            <div id="searchMovieContainer"></div>
            <div id="importMovieContainer"></div>
          </div>
        </div>
        <div className={styles.movieFormBody}>
          <div className={styles.movieFormBodyContainer}>
            <MediaItemList
              isEditModalOpen={viewModel.isEditModalOpen}
              items={currentMediaItemList}
              type="movie"
              selectedItem={selectedMovie}
              tags={viewModel.tags}
              collections={viewModel.collections}
              onEdit={handleEdit}
              onSave={saveMovie}
              onRemove={handleRemove}
              onDelete={handleDelete}
              onPin={handlePin}
              onAddItem={handleAddMovie}
              onSearch={handleSearchMovies}
            />
          </div>
        </div>
        <div className={styles.formBottom}>
          <div id="movieFormBottomContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default MoviesView;
