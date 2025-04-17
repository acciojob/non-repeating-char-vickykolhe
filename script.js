function firstNonRepeatedChar(str) {
 // Write your code here
	 return str.split('').find(char => str.indexOf(char) === str.lastIndexOf(char)) || null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
