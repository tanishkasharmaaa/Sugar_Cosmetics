const slides=document.querySelectorAll(".slide");
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
    
)

let totalslides=slides.length;
const slideimage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}
const gopre=()=>{
    counter--
    slideimage()
}


 const gonext=()=>{
   if(counter<totalslides-1){
    counter++
    slideimage()
   }

}
