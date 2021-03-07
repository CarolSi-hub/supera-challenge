import React, { useContext } from 'react';
import { GameStoreContext } from '../../contexts/GameStoreContext';
import styles from '../../styles/components/Filter.module.css';

export default function Filter() {
  const { filterOptions, setFilterOption } = useContext(GameStoreContext);

  return (
    <div className={ styles.container }>
      <div className={ styles.information }>
        <span>Order By:</span>
        <select
          name="filter"
          id="filter"
          onChange={ (e) => setFilterOption(e.target.value) }
        >
          {
            filterOptions.map((option) => (
              <option key={ option } value={ option }>
                {option}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  );
}
