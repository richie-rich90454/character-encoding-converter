document.addEventListener("DOMContentLoaded", ()=>{
    let input=document.getElementById("source-file");
    let fileNameSpan=document.getElementById("file-name");
    input.addEventListener("change", ()=>{
        if (input.files&&input.files.length>0){
            fileNameSpan.textContent=input.files[0].name;
        }
        else{
            fileNameSpan.textContent="No file chosen";
        }
    });
});