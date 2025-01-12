---
layout: post
title:  "Solving the n-Queen problem, in JavaScript"
date: 2021-10-19 16:30:34 +0200
categories: javascript
---
The `n-queen` puzzle is the problem of placing `n` queen chess pieces on a `n×n` board.

Here is one of the possible solutions for a `5×5` board.
As you can see, no two queens threaten each other.

<img src="/assets/images/5x5-queen.svg" width="320"   height="320" title="5 by 5 solution" />

We want to count all possible solutions for a given $n×n$ board.

We will write a naive implementation to check all the possibilities.

```js
function nQueen(n) {
  // create a "n x n" array
  const board = Array(n).fill()
        .map(() => Array(n).fill(0));

  const threatensCol = (j) => {
    for (let i = 0; i < n; ++i) {
      if (board[i][j]) {
        return true;
      }
    }
  };
  // ...
```

The *threatensCol* is self explanatory, it checks previous columns to see if a flag is set.

Checking the board diagonally is a bit of trouble.

<img src="/assets/images/5x5-queen-diagonally.svg" width="320" height="320" alt="checking the board diagonally" />

We need to play a bit with the indices `i` and `j`.
```js
function nQueen(n) {
  const board = Array(n).fill(Array(n).fill(false));
  const threatensRow = (i) => { /* ... */ }
  const threatensCol = (j) => { /* ... */ };

  const threatensDiagonally = (i, j) => {
    for (let k = 1; k < n; ++k) {
      // check up and left
      if (i - k >= 0 && j - k >= 0) {
        if (board[i - k][j - k]) {
          return true;
        }
      }
      // check up and right
      if (i - k >= 0 && j + k < n) {
        if (board[i - k][j + k]) {
          return true;
        }
      }
    }
  };

  // ...
```

The next step is to traverse the board, for that we use the *nQueen* function recursively. We start at the first row, try to put a new *queen* at that row, and call *nQueen* for the next row.

```js
// row, is the where we are trying to put a new queen
// n, is the dimension of the board
// board, holds the current state as a 2d array
function nQueen(row, n, board) {
  let solutions = 0;
  // ...
  return solutions;
}
```

If we ever get to the last row, that means we've found a solution. Otherwise try to sum up all possible solutions by calling *nQueen* recursively for the next row.

```js
function nQueen(row, n, board) {
  // ...
  let solutions = 0;
  for(let j = 0; j < n; ++j) {
      if(!threatensCol(j) && !threatensDiagonally(row, j)) {
          board[row][j] = 1;
          solutions += nQueen(row + 1, n, board);
          board[row][j] = 0;
      }
  }
  return solutions;
```

Let's try it for `n = 5`.

```js
const n = 5;
const board = Array(n).fill()
  .map(() => Array(n).fill(0));

const solutions = nQueen(0, n, board)
console.log({solutions})
```

Here is the output

```
[
  [ 1, 0, 0, 0, 0 ],
  [ 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 1 ],
  [ 0, 1, 0, 0, 0 ],
  [ 0, 0, 0, 1, 0 ]
]
[
  [ 1, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 0 ],
  [ 0, 1, 0, 0, 0 ],
  [ 0, 0, 0, 0, 1 ],
  [ 0, 0, 1, 0, 0 ]
]
...
[
  [ 0, 0, 0, 0, 1 ],
  [ 0, 0, 1, 0, 0 ],
  [ 1, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 0 ],
  [ 0, 1, 0, 0, 0 ]
]
{ solutions: 10 }
```

As you can see, all the possible solutions are printed.
