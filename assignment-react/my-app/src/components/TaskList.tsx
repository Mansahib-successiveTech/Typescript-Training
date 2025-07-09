

function TaskList({tasks}:{tasks:string[]}){
return(
<div>
     {tasks.map((element,index)=>{
        return(
            <ul key={index}>
                <li >{element}</li>
            </ul>
        )
     }
    )
}
</div>
)
}


export default TaskList;