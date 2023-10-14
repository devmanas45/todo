//......................Selecting all the tags ..................................

const heading=document.querySelector(".heading>h1");
const input=document.querySelector("#addBox");
const error=document.querySelector(".error");
const listContainer=document.querySelector(".listContainer");

//......................Function for changing and appending of lists ..................................

function addtask(){
    if(input.value=='')
        error.style.display="block";
    else{
        error.style.display="none";
        let li=document.createElement("li");    //creating element list where we have already set status for the list
        li.innerHTML=input.value;               //taking the value from the input box
        listContainer.append(li);               //appending the value from input to the class listContainer
        let span=document.createElement("span");    //creating  span for adding cross (X) symbol 
        span.innerHTML="\u00d7";            
        li.append(span);            
    }
    input.value='';                             // 
    savedata();
};

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

const savedata=()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML =localStorage.getItem("data");   
}
showData();

