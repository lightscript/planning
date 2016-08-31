// https://gamealchemist.wordpress.com/2013/05/01/lets-get-those-javascript-arrays-to-work-fast/
// see: 6. write your own, push, pop, unshift, splice

function spliceIndices(arr, indicesToRemove) {
  if (!arr.length) return;

  // indicesToRemove assumed sorted
  for (let i = 0; i < indicesToRemove.length; i++) {
    // account for previous shifts by subtracting i
    let index = indicesToRemove[i] - i;
    const nextIndex = indicesToRemove[i + 1] || arr.length;
    const distanceToShiftLeft = i + 1;

    // shift elements left
    while (index < nextIndex) {
      arr[index] = arr[index + distanceToShiftLeft];
      index++;
    }
  }

  // cut off the tail
  arr.length -= indicesToRemove.length;
}
// a = Array(20).fill().map((x, i) => i); spliceIndices(a, [2, 7, 15]); a
a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
spliceIndices(a, [2, 7, 15]); a
