/**
 * Arrays are ordered unlike objects
 * its useful but it comes at a cost when we try to access them
 * 
 * Use array only when you need order
 * we have to reindexing the array when we add element at the beginning.
 * removing from the start is also a problematical  (re-indexing is a must)
 * 
 * access o(1)
 * searching o(N)
 * 
 * 
 *                          Built in Array methods
 * 
 * push o(1)
 * pop o(1) constant time
 * 
 * shift o(N) - we have to reindex
 * unshift o(N) - we have to reindex
 * 
 * sort- O(N * log N)
 */