let guest_list :string[] = ['Nomi','hyder','usman'];
    
// for (let i=0; i<guest_list.length; i++){


  //  console.log('Dear Mr. '+ guest_list[i] + ',\n\n\It is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }



let absent_guest :string = 'hyder' ;

let new_guest :string = 'sir zia ' ;

guest_list[0] = new_guest ;

// for (let i=0; i<guest_list.length; i++){


  //  console.log('Dear Mr. '+ guest_list[i] + ',\n\n\It is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }


// console.log(`Mr. ${absent_guest} is not coming the party.`)
// console.log(`Good news! we find big table so we are inviting 3 more guests, `)

guest_list.unshift('ama') ; 
guest_list.splice(2 , 0 , 'Abu bakar');
guest_list.push('faheem');

// for (let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr. '+ guest_list[i] + ',\n\n\It is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

// console.log('\nsorry we can not arrange big table, only two peoples will be invied.');
while(guest_list.length > 2 ){
   let remove_guest = guest_list.pop();
  //  console.log(`sorry Mr. ${remove_guest}, you are not invited for dinner. `);

}
//hmary bachy hoi guest.
// for (let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr. '+ guest_list[i] + ',\n\n\you are still invited.\n\nthank you!\n\n')
// }
//mene sare guest array se remove kar diye.

guest_list.splice(0, 2);
console.log(guest_list);

// Exercise 19

// print the message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guest Are: ${guest_list.length}`);


