let Name;

document.getElementById("mySubmit").onclick = function(){
    Name = document.getElementById("myText").value;
    userName=Name.toUpperCase()
    document.getElementById("myH1").textContent=`HAPPY BIRTHDAY 🎊${userName}🎊`;
}