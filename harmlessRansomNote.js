// LINEAR TIME COMPLEXITY O(n + m) or 0(n)
function harmlessRansomNote(noteText, magazineText) {
    // make paragraph an array
    let noteArray = noteText.split(' ')
    let magazineArray = magazineText.split(' ')

    // put number of occurences of words to hash table
    // O(n)
    let magazineHashTable = { }
    magazineArray.forEach(word => {
        if (!magazineHashTable[word]) magazineHashTable[word] = 1
        else magazineHashTable[word]++
    })

     // O(m)
    let canProduceNote = true
    noteArray.forEach(note => {
        if (magazineHashTable[note] && magazineHashTable[note] > 0) {
            magazineHashTable[note]--
        } else {
            canProduceNote = false
        }
    })

    // We have two O(n) + O(m) time complexity, so algorithm runs on O(n) time complexity in general
    console.log(canProduceNote)
}

harmlessRansomNote('asd 1234', 'asd 123 1234')
