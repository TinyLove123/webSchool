function loadMenu(){
    fetch("../webShool/json/menu.json").then(res=>res.json()).then(json=>{
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
function loadEvent()
{
    fetch("../webShool/json/img.json").then(res=>res.json()).then(data=>{
    var b=data
    var bf=document.querySelector('.before')
    var af=document.querySelector('.after')
    var link=document.getElementById("link");
    var img=document.getElementById("slider");
    var imgIndex=0;
    var positionX=0;
    function changeAttribute(index){
        link.setAttribute("href", b[index].href);
        img.src=b[index].src;
    }   
    bf.addEventListener('click',a=>{
        imgIndex--
        if(imgIndex===-1){
            imgIndex=b.length-1
        }
        img.style.animation='';
        setTimeout(()=>{
            changeAttribute(imgIndex)
            img.style.animation='sliceLeft 0.5s ease-in-out'
        },200)  
    })
    af.addEventListener('click',e=>{
        imgIndex++
        if(imgIndex===b.length){
            imgIndex=0
        }  
        img.style.animation=''
        setTimeout(()=>{
            changeAttribute(imgIndex)
            img.style.animation='sliceRight 0.5s ease-in-out'
        },200)
    })
    function runSlider(duration){
        inTerVal=setInterval(()=>{
            af.click();
        },duration);
    }
    runSlider(5000)
    function clsInterval(element){
        clearInterval(inTerVal)
    }
    //cách 1 khi mouseover chuột
   /* link.addEventListener("mouseover",function(){
        clsInterval(link)
    })
    bf.addEventListener("mouseover",function(){
        clsInterval(bf)
    })
    af.addEventListener("mouseover",function(){
        clsInterval(af)
    })*/
    //cách 2 khi mouseover chuột
    [link,bf,af].forEach(element => {
        element.addEventListener("mouseover",function(){
            clsInterval(element)
        })
    });
    link.addEventListener("mouseout",function(){
        runSlider(5000)
    })
    })

}

window.onload=()=>{
    loadEvent()
    loadMenu()
}