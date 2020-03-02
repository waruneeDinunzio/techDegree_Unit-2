/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const listItem = document.querySelectorAll('.student-item');
const itemPerPage = 10;
const NumberOfPage = Math.ceil(listItem.length/itemPerPage);
console.log(listItem);



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage(listItem,page) {
const startIndex = (page*10)-10; 
const endIndex = (page*10)-1;
for (let i = 0; i < listItem.length; i += 1) {
   if (i >= startIndex && i <= endIndex) {
      //console.log(listItem[i]);
      listItem[i].style.display = '';
   } else {
      listItem[i].style.display = 'none';
   }

}

};

showPage(listItem,2);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (listItem) => {
   let pagination = document.createElement('div');
   pagination.className = 'pagination';
   let pageDiv = document.querySelector('.page');
   pageDiv.appendChild(pagination);
   let ul = document.createElement('ul');
   pagination.appendChild(ul);

   for ( let i = 0; i < NumberOfPage; i +=1) {
   function createLiLink(i) {
   let li = document.createElement('li');
   ul.appendChild(li);
   let a = document.createElement('a');
   a.className = "active";
   a.href = "#";
   a.innerHTML= i+1;
   li.appendChild(a);
   }
   //return createLiLink(i);
   //};
   return createLiLink(i);
}
   
}
appendPageLinks();




// Remember to delete the comments that came with this file, and replace them with your own code comments.