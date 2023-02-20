function hideSection(sectionID){
    let element = document.getElementById(sectionID);
    element.classList.add("hideItems");
}

function showSection(sectionID){
    let element = document.getElementById(sectionID);
    element.classList.remove("hideItems");
}