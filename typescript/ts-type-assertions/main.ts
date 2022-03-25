
let message1 = 'abc';
let endsWithC1 = message1.endsWith('c');

// In this case we lose the intellisense capability in the IDE
// tsc also dosesn't know message2 is a string
// in order to do that we need a type assertion
let message2;
message2 = 'abc';
let endsWithC2 = message2.endsWith('c');

// type assetion - option 1 (more common)
let message3;
message3 = 'abc';
let endsWithC3 = (<string>message3).endsWith('c');


// type assetion - option 2
let message4;
message4 = 'abc';
let endsWithC4 = (message4 as string).endsWith('c');