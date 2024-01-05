const entry = document.getElementById("entry");
const myArray = [];


function addList(){
    if(entry.value === ""){
        alert("Enter a task");
    }
    else {
        myArray.push(entry.value);
        entry.value = "";
        display();
    } 
}


function display(){
    myUlList.innerHTML = "";
    // myArray.reverse();
    myArray.map(displayList); //Displaying each of the elements in the array.
    
}
const myUlList = document.getElementById('Listt');	


function displayList(value){
    // console.log(value);
    
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(value));
    myUlList.appendChild(li);
    let button = document.createElement('button');
    button.appendChild(document.createTextNode("Remove"));
    li.appendChild(button); 

    
    button.addEventListener("click", function clearTask(){
        li.style.display = "none";
        li.value = "";
        myArray.length = "";
    })

    // doneBtn.addEventListener("click", function markDone(){
    //     li.style.color = "#3F3E3F";
    //     li.style.textDecoration = "line-through";
    //     li.style.fontWeight = "bolder";
    //     doneBtn.style.display = "none";
    //     const checkBox = document.createElement("h1");
    //     const boxText = document.createTextNode("\u2714");
    //     checkBox.appendChild(boxText);
    //     li.appendChild(checkBox);
    // })    
 }




