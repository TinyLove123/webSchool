function loadMenu(){
    fetch("./json/menu.json").then(res=>res.json()).then(json=>{
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
    fetch("./json/img.json").then(res=>res.json()).then(data=>{
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
function loadNotice(){
        var infoList=document.querySelectorAll(".info-Item")
        var firstchild=infoList[0]
        var secondchild=infoList[1]
        var thirdchild=infoList[2]
    fetch("json/info.json").then(res=>res.json()).then(information=>{
        var info=information;
        var infoImg=firstchild.querySelector(".info-img")
        var infocontent=firstchild.querySelector(".info-content")
        var description=firstchild.querySelector(".description > p")
        var prev=firstchild.querySelector(".frev")
        var next=firstchild.querySelector(".next")
        var infoIndex=0;
        function changeNotice(index){
            infoImg.setAttribute("src",info[index].src)
            infocontent.innerHTML=`${info[index].infocontent}`
            description.innerHTML= `${info[index].description}`
        }
    prev.addEventListener('click',e=>{
        infoIndex--
        if(infoIndex===-1){
            infoIndex=info.length-1
        }
        firstchild.style.animation=''
        setTimeout(()=>{
            changeNotice(infoIndex)
            firstchild.style.animation='sliceRight 0.5s ease-in-out'
        },200)
    })
    next.addEventListener('click',e=>{
        infoIndex++
        if(infoIndex===info.length){
            infoIndex=0
        }  
        firstchild.style.animation=''
        setTimeout(()=>{
            changeNotice(infoIndex)
            firstchild.style.animation='sliceLeft 0.5s ease-in-out'
        },200)
    })
    }) 
    fetch("json/info1.json").then(res=>res.json()).then(informationsecond=>{
        var info=informationsecond;
        
        var infoImg=secondchild.querySelector(".info-img")
        var infocontent=secondchild.querySelector(".info-content")
        var description=secondchild.querySelector(".description > p")
        var prev=secondchild.querySelector(".frev")
        var next=secondchild.querySelector(".next")
        var infoIndex=0;
        function changeNotice(index){
            infoImg.setAttribute("src",info[index].src)
            infocontent.innerHTML=`${info[index].infocontent}`
            description.innerHTML= `${info[index].description}`
        }
    prev.addEventListener('click',p=>{
        infoIndex--
        if(infoIndex===-1){
            infoIndex=info.length-1
        }
        secondchild.style.animation=''
        setTimeout(()=>{
            changeNotice(infoIndex)
            secondchild.style.animation='sliceRight 0.5s ease-in-out'
        },200)
        
    })
    next.addEventListener('click',p=>{
        infoIndex++
        if(infoIndex===info.length){
            infoIndex=0
        }  
        secondchild.style.animation=''
        setTimeout(()=>{
            changeNotice(infoIndex)
            secondchild.style.animation='sliceLeft 0.5s ease-in-out'
        },200)
    })
    }) 
    fetch("json/info2.json").then(res=>res.json()).then(informationthird=>{
        var info=informationthird;
        var infoImg=thirdchild.querySelector(".info-img")
        var infocontent=thirdchild.querySelector(".info-content")
        var description=thirdchild.querySelector(".description > p")
        var prev=thirdchild.querySelector(".frev")
        var next=thirdchild.querySelector(".next")
        var infoIndex=0;
        function changeNotice(index){
            infoImg.setAttribute("src",info[index].src)
            infocontent.innerHTML=`${info[index].infocontent}`
            description.innerHTML= `${info[index].description}`
        }
    prev.addEventListener('click',p=>{
        infoIndex--
        if(infoIndex===-1){
            infoIndex=info.length-1
        }
        thirdchild.style.animation=''
        setTimeout(()=>{
            changeNotice(infoIndex)
            thirdchild.style.animation='sliceRight 0.5s ease-in-out'
        },200)
    })
    next.addEventListener('click',p=>{
        infoIndex++
        if(infoIndex===info.length){
            infoIndex=0
        }  
        thirdchild.style.animation=''
        setTimeout(()=>{
            changeNotice(infoIndex)
            thirdchild.style.animation='sliceLeft 0.5s ease-in-out'
        },200)
    })
    }) 
}
function loadMenuResPonSive(){
    button=document.querySelector(".button")
    MenuResPonSive=document.querySelector(".menu-2-responsive")
    button.addEventListener("click",function(){
        MenuResPonSive.classList.toggle("show");
    })
}
window.onload=()=>{
    loadEvent()
    loadMenu()
    loadNotice()
    loadMenuResPonSive()
}