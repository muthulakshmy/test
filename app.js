let notes=[];
function add_notes(){
    let notes_title=document.getElementById("text").value
    console.log(notes_title)
    let notes_des=document.getElementById("textarea").value
    console.log(notes_des)
    if(notes_title&&notes_des){
        let note={
            title:notes_title,
            des:notes_des
        }
        let check_notes=notes.find((value)=>value.title===notes_title)
        if(check_notes){
            check_notes.des=notes_des

        }else{
            notes.push(note)
            console.log(notes)

        }
        display_notes()
    }


}

function display_notes(){
    let note_list=document.getElementById("notes__list")
    console.log(note_list)
    note_list.innerHTML=""
    notes.forEach((note)=>{
        let note_display=document.createElement('li');
        note_display.innerHTML=`${note.title}<br>${note.des}<br>`;
        let editButton=document.createElement("button")
        editButton.innerText="Edit";
        editButton.setAttribute("id","edit")
        editButton.onclick=()=>editNote(note)
        let deleteButton=document.createElement("button")
        deleteButton.setAttribute("id","delete")
        deleteButton.innerText="Delete";
        deleteButton.onclick=()=>deleteNote(note)
        
        note_display.appendChild(editButton)
        note_display.appendChild(deleteButton)
        note_list.appendChild(note_display)
        
    })
}
function editNote(note){
    document.getElementById("text").value=note.title;
    document.getElementById("textarea").value=note.des;
    document.getElementById("add_notes").innerText="update";
    document.getElementById("add_notes").onclick=()=>UpdateNote(note);

}
function deleteNote(note){
    const confirmation=confirm("Are you sure you want to delete the notes?")
    if(confirmation){
        notes=notes.filter((value)=>value.title!==note.title)
        display_notes()
        clear_notes()
    }
}
function UpdateNote(note){
   let title=note.title=document.getElementById("text").value
   let des=document.getElementById("textarea").value
   if(title&&des){
    note.title=title;
    note.des=des;
    display_notes()
    clear_notes()
   }
}
function clear_notes(){
    document.getElementById("text").value="";
    document.getElementById("textarea").value="";
    document.getElementById("add_notes").innerText="save notes"
    document.getElementById("add_notes").onclick=()=>saveNote;

}



