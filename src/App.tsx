import MainPage from 'pages/main/Main';
import ErrorPage from 'pages/error/ErrorPage';

import { useQuery } from '@apollo/client';
import { SHIPS_DATA_QUERY } from 'shared/api/gql-queries';
import { RawShipsData } from 'shared/types/types';

import './App.css';

export default function App() {
  const { data, error, loading } = useQuery<RawShipsData>(SHIPS_DATA_QUERY);
  if (error) {
    return <ErrorPage name={error.name} message={error.message} />;
  }

  if (!loading) {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
