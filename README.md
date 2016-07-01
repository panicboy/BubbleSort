## Bubble Sort
Bubble Sort works by comparing two numbers at a time: the current number in a list and the one that follows it. If the second number is smaller than the first, it swaps their positions before going to the next number. In this way, lower numbers are always moving to the left and higher numbers to the right. The sorting starts again at the beginning of the list, and continues until the entire list is checked with no swaps.

### Pseudo code
1. Start with the first number in the list.
2. If the next number in the list is lower than the current number, swap their positions.
3. Go to the next number and repeat step 2 until the end of the list.
4. If there have been any swaps since the beginning of the list, go back to step 1.

#### Best case
The best case scenario for this algorithm is a list that is already in the sorted order. The algorithm will only have to traverse the list once.

#### Worst case
The worst case scenario for this algorithm is a list in reverse sorted order. The algorithm will have to traverse the entire list once for each list item.