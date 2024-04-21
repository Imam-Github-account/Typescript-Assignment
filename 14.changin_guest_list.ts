let guest_list :string[] = ['Nomi','hyder','usman'];

for (let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. '+ guest_list[i] + ',\n\n\It is our pleasure to invite you in our party.\n\nThank you!\n\n')
}


let absent_guest :string = 'hyder' ;

let new_guest :string = 'sir zia ' ;

guest_list[0] = new_guest ;

for (let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. '+ guest_list[i] + ',\n\n\It is our pleasure to invite you in our party.\n\nThank you!\n\n')
}


console.log(`Mr. ${absent_guest} is not coming the party.`)