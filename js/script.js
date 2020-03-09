/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
window.addEventListener('DOMContentLoaded', (event) => { 
/***
create global variables:
listItem to store studente list and number of item per page
***/  
   const listItem = document.querySelectorAll('.student-item');
   const itemPerPage = 10;
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/
   const showPage = (studentList,page) => {
      const startIndex = (page*itemPerPage)-itemPerPage; 
      const endIndex = (page*itemPerPage)-1;
      const numberOfPage = Math.ceil(studentList.length/itemPerPage);
      for (let i = 0; i < studentList.length; i += 1) {
       if (i >= startIndex && i <= endIndex) {
       studentList[i].style.display = '';
       } else {
       studentList[i].style.display = 'none';
       }
      }
   };
   showPage(listItem,1);
 
 /*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
   const appendPageLinks = (studentList) => {
// this use to prevent a duplicate pagination
      let paginationDiv = document.querySelector('.pagination');
      if (paginationDiv) {
      paginationDiv.remove();
      }
      //const aActive = document.querySelectorAll('.active');
      //if (aActive.length >0) {
      //aActive[0].remove();
      //}
   const numberOfPage = Math.ceil(studentList.length/itemPerPage);
//Create pagination link with ul, li and a element with class name
   const pagination = document.createElement('div');
      pagination.className = 'pagination';
   const pageDiv = document.querySelector('.page');
      pageDiv.appendChild(pagination);
   const ul = document.createElement('ul');
      pagination.appendChild(ul);
      for ( let i = 0; i < numberOfPage; i +=1) {
       let li = document.createElement('li');
       ul.appendChild(li)[i];
       let a = document.createElement('a');
       a.className = "";
       a.href = "#";
       a.innerHTML= i+1;
       li.appendChild(a)[i];
      }
 
//make the current page active
      let a = document.querySelectorAll('a');
      a[0].className = 'active';
      for (let i = 0; i < numberOfPage; i +=1) {
         a[i].addEventListener('click', (e) => {
            event.preventDefault();
            for (let j = 0; j< numberOfPage; j +=1){
               a[j].className = '';
            }
            e.target.className = 'active';
            showPage(listItem,[i+1]);
         });
      }
   }
   appendPageLinks(listItem);

// create search input and search button
   const searchBox = document.createElement('div');
   searchDiv = document.querySelector('.page-header');
   searchBox.className = 'student-search';
   searchDiv.appendChild(searchBox);
   const searchInput = document.createElement('input');
   searchInput.placeholder = "search for students...";
   searchInput.type = 'text';
   searchBox.appendChild(searchInput);
   const searchButton = document.createElement('button');
   searchButton.innerHTML = "Search";
   searchBox.appendChild(searchButton);

//create search function
   const search = (inputSearch, names) => {
//create empty array for name match
      const nameMatch = [];
      const studentList = document.querySelectorAll('.student-list h3');
//create variable to store null list of class name "preventDup" to use for prevent a duplicate meassage
      const preventDup = document.querySelectorAll('.preventDup');
      if (preventDup.length >0) {
      preventDup[0].remove();
      }
// compare student name in the list and user input name and store to nameMatch array
      for (let i=0; i < studentList.length; i +=1) {
         names[i].style.display ='none';
         if (inputSearch.value.length !== 0 
            && studentList[i].textContent.toLowerCase().includes(inputSearch.value.toLowerCase())) {
            nameMatch.push(names[i]);
         }
      }
// when is empty string in search input, it shows 1st page
      if (searchInput.value === "") { // diplayin init student list in case iput is empty string
         appendPageLinks(listItem);
         showPage(listItem, 1);
         } else {
            if (nameMatch.length === 0) {
            console.log(preventDup);
            let paginationDiv = document.querySelector('.pagination');
            if (paginationDiv) {
            paginationDiv.remove();
            }
// showe massage when it's no match name
            let massage = document.createElement('h1');
            massage.innerHTML = 'No results have been found, Plase try again';
            massage.className = 'preventDup';
            document.querySelector('.page').appendChild(massage);
            showPage(nameMatch,1);
      } else {
         showPage(nameMatch,1);
         appendPageLinks(nameMatch);
      } 
      } 
   } 
   searchButton.addEventListener('click',(e) => {
   search(searchInput,listItem);
   });

   searchInput.addEventListener('keyup',(e) => {
   search(searchInput,listItem);
   });
});