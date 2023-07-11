// a program to check no of vowels in a string applying the string methods

function checkvowel(str){
    let lowstr = str.toLowerCase();
    let count = 0
    for(let i=0;  i<=str.length; i++){
        if(lowstr[i] == 'a' || lowstr[i] == 'e' || lowstr[i] == 'i' || lowstr[i] == 'o' || lowstr[i] == 'u'  ){

            count+=1
        }
        
    };
    console.log(`the no of ovwels in the string is ${count}`)
    return count
};

mystr = "Hello Im an Animal"
checkvowel(mystr)

