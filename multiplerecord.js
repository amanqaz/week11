// Multiple records of people are given, you have to print the first name and last name of each person.

let friends = [           {fname: 'Rachal', lname:"Green" ,id: 1, marks : 98 },          {fname: 'Ross',lname:"Geller" , id: 2, marks : 23 },          {fname: 'Monica ',lname:"Geller" , id: 3, marks : 75 },          {fname: 'Joey',lname:" Tribbiani" , id: 4, marks : 46 },          {fname: 'Chandler  ',lname:"Bing" , id: 5, marks : 78 },          {fname: 'Phoebe',lname:"Buffay" , id: 6, marks : 45 }           ]
friends.map(function(a,i){
    console.log(friends[i].fname, friends[i].lname);
})



    // output: [ 'Rachal Green', 'Ross Geller', 'Monica Geller', 'Joey Tribbiani', 'Chandler Bing', 'Phoebe Buffay' ]