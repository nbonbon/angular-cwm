import { LikeComponent } from "./like.component";

let component = new LikeComponent(10, true);

let likesCount = component.likesCount;
let isSelected = component.isSelected;
console.log('Initial number of likes: ' + likesCount);
console.log('Initial like button isSelected: ' + isSelected);

console.log('click like');
component.onClick();

likesCount = component.likesCount;
isSelected = component.isSelected;
console.log('Final number of likes: ' + likesCount);
console.log('Final like button isSelected: ' + isSelected);

console.log('click like');
component.onClick();

likesCount = component.likesCount;
isSelected = component.isSelected;
console.log('Final number of likes: ' + likesCount);
console.log('Final like button isSelected: ' + isSelected);