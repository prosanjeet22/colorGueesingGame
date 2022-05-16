var totalcolorbox=6;
var colors=generatecolor(totalcolorbox);
var colourbox=document.querySelectorAll(".box");
var dsp_color=generateColorG();
var dispaycolour=document.querySelector("#colordisplay");
var b=document.querySelector('.box1');
var message1=document.querySelector('#message');
var refresh=document.querySelector('#refresh');
var easyBtn=document.querySelector('#easyButton')
var hardBtn=document.querySelector('#hardButton');

refresh.addEventListener('click',function(){
refresh.textContent='Refresh'
message1.textContent="Les's Play";
    changecolor(6);

})
easyBtn.addEventListener('click',function(){
   hardBtn.classList.remove('selected');
     easyBtn.classList.add('selected');
     totalcolorbox=3;
     changecolor(totalcolorbox);
     
    
 })
 function changecolor(totalcolorbox)
 {
    colors=generatecolor(totalcolorbox);
    dsp_color=generateColorG(totalcolorbox);
    dispaycolour.textContent=dsp_color;
    for(let i=0;i<colors.length;i++)
    {
        colourbox[i].style.backgroundColor=colors[i];
    }
 }
hardBtn.addEventListener('click',function(){
   easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    totalcolorbox=6;
    changecolor(totalcolorbox);
})

function generatecolor(totalcolorbox)
{
    let arr=[];
    for(let t=0;t<totalcolorbox;t++)
    {
        arr.push(gencolor());
    }
    return arr;

}
dispaycolour.textContent=dsp_color;
for(let i=0;i<colors.length;i++)
{
    colourbox[i].style.backgroundColor = colors[i];
    colourbox[i].addEventListener('click',function(){
        var clickedcolor=this.style.backgroundColor;
        console.log(clickedcolor+"  "+dsp_color)
        if(clickedcolor.localeCompare(dsp_color))
        {
            document.getElementById('message').innerHTML='Correct';
            refresh.textContent="Play Again";
            colorchange(clickedcolor);
        }
        else{
            document.getElementById('message').innerHTML='Try Again Press Refresh button';


        }

    })

}
function colorchange(Cx)
{
    for(let i=0;i<colors.length;i++)
    {
        colourbox[i].style.backgroundColor=Cx;
    }
}
function generateColorG(totalcolorbox)
{
    let rand= Math.floor(Math.random()*totalcolorbox);
    return colors[rand];
}
function gencolor()
{
    let r;
    let g;
    let b;
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";


}

