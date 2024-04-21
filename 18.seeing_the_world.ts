
// store the location in a array. Make sure the array is not in alphabetical order.
let places :string[] = ['ranibag', 'moan jo daro', 'sukkur','thull'];

// print your array in original order.
console.log('original ' + places);

// print your array in alphabetical order without modifing the actual list.
console.log( 'copy ' + [...places].sort());

//Show that your array is still in its original order by printing it.
console.log('original ' + places);

//print your array in reverse alphabetical order without chinging the order of the original list.
console.log( 'copy ' + [...places].sort().reverse());

//show that your array is still in its original order by printing it again.
console.log('original ' + places);

//Reverse the order of your list.print the array to show that its order has changed.
console.log('original ' + places.reverse());
 
//Reverse the order of your list again.Print the list to show it's back to its original order.
console.log('original ' + places.reverse());

//sort your array so it's stored in alphabetical order.Print the array to show that its order has been changed.
console.log('original ' + places.sort());

//sort to change your array so it's stored in reverse alphabetical order.Print the list to show its os changed.
console.log('original ' + places.sort().reverse());
