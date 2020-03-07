const listItem = document.querySelectorAll('.student-item');
const itemPerPage = 10;
//const numberOfPage = Math.ceil(listItem.length/itemPerPage);
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/
const showPage = (studentList,page) => {
    const startIndex = (page*itemPerPage)-itemPerPage; 
    const endIndex = (page*itemPerPage);
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
   let paginationDiv = document.querySelector('.pagination');
   if (paginationDiv) {
      paginationDiv.remove();
   } else {
      //Create "pagination" div
   const numberOfPage = Math.ceil(studentList.length/itemPerPage);
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
       a.className = "active";
       a.href = "#";
       a.innerHTML= i+1;
       li.appendChild(a)[i];
    }
    
 
//appendPageLinks();
const a = document.querySelectorAll('a');
for (let i = 0; i < numberOfPage; i +=1) {
  a[i].addEventListener('click', (e) => {
      for (let j = 0; j< numberOfPage; j +=1){
      a[j].className = '';
      }
      e.target.className = 'active';
      showPage(listItem,[i+1]);
   });
}
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
   for (let i=0; i < studentList.length; i +=1) {
      names[i].style.display ='none';
      if (inputSearch.value.length !== 0 && studentList[i].textContent.toLowerCase().includes(inputSearch.value.toLowerCase())) {
      nameMatch.push(names[i]);
      }
   }
     if (nameMatch.length === 0) {
        const massage = document.createElement('p');
        massage.innerHTML = 'no results have been found';
        console.log(massage);
        document.querySelector('.page').appendChild(massage);
        showPage(nameMatch,0);
        appendPageLinks(nameMatch);
      } else {
        showPage(nameMatch,1);
        appendPageLinks(nameMatch);
      }  
}
   
searchButton.addEventListener('click',(e) => {
   event.preventDefault();
   search(searchInput,listItem);
});

searchInput.addEventListener('keyup',(e) => {
   search(searchInput,listItem);
});

