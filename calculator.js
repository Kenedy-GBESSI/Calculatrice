let input = document.getElementById('display-afficheur'),exp = '';
input.value = '0';
for(let btn of document.getElementsByClassName('btn')){
    btn.addEventListener('click',(e)=>{
          e.preventDefault();
          e.stopPropagation();
           exp = exp + e.target.value;
           input.value = exp;
    })
}
function keydetector(){
    document.addEventListener('keydown',(e)=>{
     e.preventDefault();
    if(e.key==='Backspace'){
        document.getElementsByClassName('del')[0].style.transform = 'scale(0.9)';
        nextdelete();
    }
    if(e.key==='Delete'){
        document.getElementsByClassName('init')[0].style.transform = 'scale(0.9)';
        init();
    }
    console.log(e);
    if(['0','1','.','2','3','4','5','6','7','8','9','+','-','*','/','%'].indexOf(e.key.toString())!==-1){
        [...document.getElementsByTagName('button')].filter((btn)=>{
            return btn.innerText === e.key.toString();
         })[0].style.transform = 'scale(0.9)';
          exp = exp + e.key.toString();
          input.value = exp;
        }
        if(e.key.toString()==='=' || e.key==='Enter'){
               operate();
        }
    });
}
function operate(){
    let result = eval(exp);
    if(input.value){
      if(isfloat(result.toString())){
          input.value = eval(exp).toFixed(7);
          exp = eval(exp).toFixed(8).toString();
      }else{
          input.value = eval(exp);
          exp = eval(exp).toString();
      }    
    }
    console.log(result);
}
function init(){
    exp = '';
    input.value = '0';
}
keydetector();
function isfloat(v){
    return /[.][0-9]{8,}/.test(v);
}
function nextdelete(){
    exp = exp.slice(0,exp.length-1);
    input.value = exp;
}
document.getElementsByClassName('egal')[0].addEventListener('click',(e)=>{
      e.preventDefault();
      e.stopPropagation();
      operate();
});
document.getElementsByClassName('init')[0].addEventListener('click',(e)=>{
    init();
});
document.getElementsByClassName('del')[0].addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    e.target.style.transform = 'scale(0.9)';
    nextdelete();
})

