// write a code to count the no. of words in a given sectence

function no_of_words(a){
    console.log(a)
    console.log(a.length)
    let trimmedA = a.trim() // Trim the whitespaces from strat and end of the sentence
    console.log(`Trimmed string : ${trimmedA}`)
    let spl = trimmedA.split(" ")
    console.log(spl)
    const nonEmptSplElem = spl.filter((element)=> element != '') // Remove whitespaces in between the lines 
    console.log(nonEmptSplElem)
    let count = 0
    for(let i of nonEmptSplElem){
        count+=1
    }
    console.log(count)
    console.log("____________________________")
}
no_of_words("   This is       a sentence    ")
no_of_words("Hii   this is    Mohammed  Aftab Ansari ")


