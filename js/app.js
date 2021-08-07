// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add 
// an empty todo into the list
// Also add a search bar to search throygh the todo-list

const input = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

function addToTask(event){

    //console.log(event);
    event.preventDefault();
         

   //create div element
   const div = document.createElement('div');
   div.classList.add('todo');

   //creating li element
   const li = document.createElement('li');
   if(input.value == ''){
       swal("Please Write To Do List!!!");
       return;
    } 
    else{
       li.innerText = input.value;
    }
       
   
   li.classList.add('todo-item');
   div.appendChild(li);

   //Check button creation
   const ckeckbutton = document.createElement('button');
   ckeckbutton.innerHTML = '<i class="fas fa-check"></i>';
   ckeckbutton.classList.add('check');
   div.appendChild(ckeckbutton);

   //trash button creation
   const trashbutton = document.createElement('button');
   trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
   trashbutton.classList.add('trash');
   div.appendChild(trashbutton);

   //to do list er shate div add
   todoList.appendChild(div);

    //reset 
    input.value=''; 
      
     
}

function removeUpdate(event){
    const target = event.target;
    if(target.classList[0]== 'trash'){
        const div = target.parentElement;
        div.classList.add('drop-effect');
        div.addEventListener('transitionend',function(){
            div.remove();
        })
       
    } 
    else if(target.classList[0]=='check'){
        const div = target.parentElement;
        div.classList.add('completed');
        target.remove();

    }

}

//function
todoBtn.addEventListener('click',addToTask);
todoList.addEventListener('click',removeUpdate);
// todoBtn.addEventListener('click', function(e){
//       addToTask(e);
// });
