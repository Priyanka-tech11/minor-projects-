function addTask()
{
    const input = document.getElementById("taskinput");
    const task= input.value.trim();

    if (task === "")
        {
            alert("Please enter a task.");
            return;
        }    
    
    const li=document.createElement("li");
    li.textContent=task;

    li.onclick=function()
    {
        li.classList.toggle("completed");
    
    };
     const deletebtn=document.createElement("button");
     deletebtn.textContent="X";
     deletebtn.className="delete";

     deletebtn.onclick =function (e)
     {
        e.stopPropagation();
        li.remove();
     };
     li.appendChild(deletebtn);

     document.getElementById("tasklist").appendChild(li);
     input.value="";
    }
