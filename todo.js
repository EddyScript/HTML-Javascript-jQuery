
let taskTextBox2 = $("#taskTextBox")

$("#btnAddTask").click(function(){
    let title = taskTextBox2.val()
    
    liItem = $("<li>")
    liItem.html(title)
        
    $("#taskList").append(liItem)
})
console.log(taskTextBox2)


