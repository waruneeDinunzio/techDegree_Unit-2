const listItem = document.querySelectorAll('.student-item');
const itemPerPage = 10;
const numberOfPage = Math.ceil(listItem.length/itemPerPage);

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/
const showPage = (listItem,page) => {
    const startIndex = (page*itemPerPage)-itemPerPage; 
    const endIndex = (page*itemPerPage);
    for (let i = 0; i < listItem.length; i += 1) {
       if (i >= startIndex && i <= endIndex) {
       listItem[i].style.display = '';
       } else {
       listItem[i].style.display = 'none';
       }
    }
 };
 showPage(listItem,1);
 
 /*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (listItem) => {
   let paginationDiv = document.querySelector('.pagination');
   if (paginationDiv) {
      paginationDiv.remove();
   } else {
   
    let pagination = document.createElement('div');
    pagination.className = 'pagination';
    let pageDiv = document.querySelector('.page');
    pageDiv.appendChild(pagination);
    let ul = document.createElement('ul');
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
    }
 }
appendPageLinks();
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
const nameMatch = [];
const studentList = document.querySelectorAll('.student-list h3');
//let paginationDiv = document.querySelector('.page');
   //if (paginationDiv) {
      //paginationDiv.remove();
   //}
   for (let i=0; i < studentList.length; i +=1) {
      //names[i].style.display ='none';
      if (inputSearch.value.length !== 0 && studentList[i].textContent.toLowerCase().includes(inputSearch.value.toLowerCase())) {
      
      console.log(inputSearch.value);
      nameMatch.push(names[i]);
      showPage(listItem,0);
      appendPageLinks();
      //nameMatch[i].style = 'block';
      console.log(nameMatch[i]);
      }
   }
     if (nameMatch.length === 0) {
        showPage(listItem,1);
        appendPageLinks();
        const massage = document.createElement('p');
        massage.innerHTML = 'no results have been found';
        document.getElementsByClassName('page')[0].appendChild(massage);
     } else {
        for (let i=0; i < nameMatch.length; i +=1) {
           nameMatch[i].value.style = 'block';
        }
        showPage(nameMatch, 1);
        console.log(nameMatch);
     }
}
   

searchButton.addEventListener('click',(e) => {
   event.preventDefault();
   search(searchInput,listItem);
});

searchInput.addEventListener('keyup',(e) => {
   search(searchInput,listItem);
});

//showPage(listItem, 1);      
//appendPageLinks(listItem);