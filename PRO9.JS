function dvowels(string){
    let vowelsinstring =0
const vowels = ["a", "e", "i", "o", "u"]
for (let char of string){
    if(vowels.includes (char)){
        vowelsinstring++
    }
}
return vowelsinstring
}
console.log(dvowels ("My name is Oyindamola"))