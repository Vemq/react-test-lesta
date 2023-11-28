import { IoSearch } from 'react-icons/io5';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setSearchQuery, setInputValue, clearSearch } from './searchSlice';

import styles from './Search.module.css';

interface SearchProps {
  extraAction?: () => void;
}

export default function Search({ extraAction }: SearchProps) {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(
    (state) => state.search.serchInputValue
  );

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue) {
      dispatch(setSearchQuery());
      extraAction && extraAction();
    }
  };

  return (
    <form onSubmit={searchHandler}>
      <label className={styles.label}>
        Search:
        <input
          value={inputValue}
          className={styles.input}
          placeholder="Enter ship name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setInputValue({ text: e.target.value }))
          }
        />
        {inputValue && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={() => {
              dispatch(clearSearch());
            }}
          >
            ⨉
          </button>
        )}
        <button className={styles.button}>
          <IoSearch />
        </button>
      </label>
    </form>
  );
}
