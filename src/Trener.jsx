import React from 'react';
import { useState } from 'react';
import styles from './Trener.module.css';

const note = [1, 2, 3, 44, 1];

function getSum(arr) {
  let sum = 0;

  for (const elem of arr) {
    sum += +elem;
  }

  return sum;
}

export default function Trener() {
  const [notes, setNotes] = useState(note);

  function changeHandler(index, event) {
    setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
  }

  const result = notes.map((note, index) => {
    return (
      <input
        className={styles.inputs}
        key={index}
        value={note}
        onChange={(event) => changeHandler(index, event)}
      />
    );
  });

  return (
    <div>
      {result}
      {getSum(notes)}
    </div>
  );
}
