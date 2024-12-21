let btn=document.querySelector("#btn");
let input=document.querySelector(".input-box")
let task=document.querySelector("#taskinput");
let count=1;
btn.addEventListener("click",()=>{
  console.log(count++);
  let addtask=input.value.trim();
  if(addtask!=="")
  {
    let listitem = document.createElement("li");
    listitem.textContent = addtask;
    
    let deletele=document.createElement("button");
     deletele.textContent="Delete";
   
     deletele.addEventListener("click",()=>{
        task.removeChild(listitem);
     })
     listitem.appendChild(deletele);
     task.appendChild(listitem);
    input.value="";
  }else
  {
    alert("enter task!");
  }
})
