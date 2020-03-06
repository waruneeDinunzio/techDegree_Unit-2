/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
***/
const listItem = document.querySelectorAll('.student-item');
const itemPerPage = 10;
const numberOfPage = Math.ceil(listItem.length/itemPerPage);

//rewrite search function
function searchStudent(searchInp,names) {
const searchBox = document.createElement('div');
const searchDiv = document.querySelector('.page-header');
const searchInput = document.createElement('input');
const searchButton = document.createElement('button');
   
searchBox.appendChild(searchButton);
searchBox.className = 'student-search';
searchDiv.appendChild(searchBox);
searchInput.placeholder = "search for students...";
searchBox.appendChild(searchInput);
searchButton.innerHTML = "Search";
/*** 
const studentList = document.querySelectorAll('.student-list h3');
//console.log(studentList);    
const nameMatch = [];
//const studentList = document.querySelectorAll('.student-list h3');
//console.log(studentList);
//for (let i=0; i<listItem.length; i +=1){
   //listItem[i].style.display = 'none';
//}
   for (let i=0; i<listItem.length; i +=1){
   if //(searchInput.value.length !== 0){
   (names[i].textContent.toLowerCase().includes.searchInput.value.toLowerCase()){
   nameMatch.push(names[i]);
   nameMatch.style.display = 'block';
   }
     console.log(nameMatch);
// 1cb. Add the class name 'match` to `names[i]` 
      if (nameMatch === 0) {
         massage= document.createElement(p);
         massage.innerHTML = 'no results have been found';
      }
}  
//const searchStudent= document.querySelector('.student-search');
      searchButton.addEventListener('click',(e) => {
      searchStudent(searchInput,studentList);
      }) 
}***/
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/
function showPage(listItem,page) {
   const startIndex = (page*10)-10; 
   const endIndex = (page*10)-1;
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


//create search useing keyup event listener
/***const input = document.querySelector('input');
      input.addEventListener('keyup', (e) => {
         const inputText = e.target.value.toLowerCase();
         Array.from(listItem).forEach(function(name) {
            const studentName = name.firstElementChild.textContent;
            if(studentName.toLowerCase().indexOf(inputText) !=-1){
               name.style.display = 'block';
            } else {
              name.style.display = 'none';
            }
         })
      })
//create click event to show message not found
const searchStudent= document.querySelector('.student-search');
      searchStudent.addEventListener('click', (e) => {
         if (e.target.tagName === 'BUTTON') {
         inputText = e.target.value.toLowerCase(); 
         if (listItem !== inputText.textContent) {
            console.log(listItem);
            console.log(inputText);
            alert('no results have been found'); 
         }
         }
         
      })***/
 

         
/***create sort by select drop box
sortBox = document.createElement('div');
sortDiv = document.querySelector('.student-search');
sortBox.className = 'divSelect';
sortDiv.appendChild(sortBox);
paSort = document.createElement('p');
paSort.innerHTML = 'Sort By';
sortBox.appendChild(paSort);
sortSelect = document.createElement('select');
sortSelect.name = 'sortBy';
sortSelect.className = 'sortBy';
paSort.appendChild(sortSelect);
const sortOpt1 = document.createElement('option');
sortOpt1.value = "Name";
sortOpt1.innerHTML = "Name";
sortOpt1.defaultSelected = false;
sortSelect.appendChild(sortOpt1);
sortOpt2 = document.createElement('option');
sortOpt2.value = "Year";
sortOpt2.innerHTML = "year";
sortSelect.appendChild(sortOpt2);

//sort by function
function sortName() {
   const ul = document.getElementsByClassName('student-list');
   switching = true;
   while (switching) {
   const switching = false;
   const b = ul.document.querySelecterAll('.student-list h3');
   console.log(b);
   for (i =0; i < (b.length - 1); i++) {
   const shouldSwich = false;
   if (b[i].innerHTML.toLowerCase() > b[i+1].innerHTML.toLowerCase()) {
      shouldSwich = true;
      break;
   }
}
   }
}
const sortSelectName = document.getElementsByTagName('option');
sortOpt1.addEventListener('click', () => {
   sortName();
});
***/