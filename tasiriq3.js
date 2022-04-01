// Asagidaki funksiyanin izahini komment olaraq qeyd edin.
function getNumber() {
	return Math.random() * 10;
    //math arrayini random edir ve onu 10 vuru
}

// Asagidaki funksiyanin izahini komment olaraq qeyd edin.
function s(w1, w2) {
	return w1.concat(w2);
    //burada w1 w2 ile birlesir
}

function concatenate(firstWord, secondWord, thirdWord) {
	const firstWord = ['Farid'];
 const secondWord = ['Murad'];
 const thirdWord = ['Aydin'];
 const allworld = firstWord.concat(secondWord,thirdWord)
console.log(allworld);
 
}

// Nəticə
// concatenate("code", "your", "future") === "code your future"