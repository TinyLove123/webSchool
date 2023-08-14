function loadMenu(){
    fetch("../json/menu.json").then(res=>res.json()).then(json=>{
        let p="";
        for(let c of json)
        {
            p+=`<li id=${c.id}>   
                    <a href="${c.href}"><span class="${c.name}"></span>${c.content}</a>
                </li>`;
        }
        let e=document.getElementById("name")
        if(e!=null)
            e.innerHTML=p;
        var btn=document.getElementById("search")
        var find=document.getElementById("find");
        btn.addEventListener("click",function(){
            if(find.style.display==="none"){
                find.style.display="flex"
            }
            else{
                find.style.display="none"
        }
    })
    })
}
function loadData(){
    fetch("../json/data.json").then(res=>res.json()).then(data=>{
        let q="";
        for(let x of data)
        {
            q+=`
            <li class="section-notify-item">
                <a class="header-notify-link" href="${x.href}">
                    <div class="link-img">
                        <img class="section-notify-img" src="${x.src}" alt="img">
                    </div>
                    <div class="section-notify-info">
                        <h1 class="section-notify-name">${x.name}</h1>
                        <p class="section-notify-description">${x.description}</p>
                    </div>
                </a>
            </li>
            `;
        }
        let e=document.getElementById("nome")
        if(e!=null)
            e.innerHTML = q; 
    })
}
window.onload=()=>{
    loadMenu()
    loadData()
}