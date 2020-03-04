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
const numberOfPage = Math.ceil(listItem.length/itemPerPage);
//console.log(listItem);



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
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
   a.className = "";
   a.href = "#";
   a.innerHTML= i+1;
   li.appendChild(a)[i];
   }

}
appendPageLinks();

const a = document.querySelectorAll('a');
for (let i = 0; i < numberOfPage; i +=1) {
  a[i].addEventListener('click', () => {
    
  showPage(listItem,[i+1]);
      a[i].className = 'active';
  });
}

// create search input and search button
let searchBox = document.createElement('div');
   searchDiv = document.querySelector('.page-header');
   searchBox.className = 'student-search';
   searchDiv.appendChild(searchBox);
   searchInput = document.createElement('input');
   searchInput.placeholder = "search for students...";
   searchBox.appendChild(searchInput);
   searchButton = document.createElement('button');
   searchButton.innerHTML = "Search";
   searchBox.appendChild(searchButton);

//create search useing keyup event listener
const input = document.querySelector('input');
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
const searchStudent= document.querySelector('.student-search')
      searchStudent.addEventListener('click', (e) => {
         if (e.target.tagName === 'BUTTON') {
         inputText = e.target.value.toLowerCase(); 
         if (listItem !== inputText.textContent) {
            //console.log('not found');
            alert('no results have been found'); 
         }
         }
         
      })
      