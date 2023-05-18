window.onload=function(){
    let count=document.getElementById("count");
    value=0;
    count.innerText=value;
    document.getElementById("increase").onclick=
    function(){increase()};
    document.getElementById("decrease").onclick=
    function(){decrease()};
    document.getElementById("reset").onclick=
    function(){reset()};
    function increase(){
        value++;
        count.innerText=value;
        // console.log(value);
        color();
    }
    function decrease(){
        value--;
        count.innerText=value;
        // console.log(value);
        color();
        
    }
    function reset(){
        count.innerText=0;
        // console.log(value);
    }
    function color(){
        if(value>0){
            count.style.color="green";
            
        }
        else
        {
            count.style.color="red";
        }
    }
    function clock(){
        let time= new Date;
        let hr=time.getHours();
        let min=time.getMinutes();
        let sec=time.getSeconds();
        let session="AM"
        if(hr>12)
        {
            session="PM";
            hr=hr-12;
        }
        document.getElementById("clock").innerText=hr+":"+min+":"+sec+session;
        setTimeout(clock,1000)
    }
    clock();
    var buttons=document.querySelectorAll(".btn");
    for(var i=0;i<buttons.length;i++){
        buttons[i].onclick=function(){ready()};
    }   
    var displayArea=document.getElementById("display");
    var btn=document.getElementsByClassName("btn"); 
    function ready(){
       
        btn.onclick=display(event);
        function display(event){
            displayArea.innerText+=event.target.innerText
            // console.log(event.target.id)
        }
    }   
    document.getElementById("delete").onclick=function(){
        Reset()
    };
    function Reset(){
        displayArea.innerText=""
        // alert()
    }
    document.getElementById("clear").onclick=function(){
        clear()
    };
    function clear(){
        var length=displayArea.innerText.length-1;
        displayArea.innerText=displayArea.innerText.slice(0,length)
   
        // alert()
    }
    document.getElementById("ans").onclick=function(){
        Ans()
    };
    function Ans(){
     if(displayArea.innerText.includes("+"))
     sum();
     else if(displayArea.innerText.includes("-"))
     sub();
     else if(displayArea.innerText.includes("*"))
     product();
    
     else(displayArea.innerText.includes("/"))
     Divide();
    }
    function sum(){
        var arr= displayArea.innerText.split("+");
        var sum=0;
          for(var i=0;i<arr.length;i++){
              sum+=parseInt(arr[i])
        //   console.log(arr[i])
          }
          displayArea.innerText=sum;
        //   alert(sum)
    }
    function sub(){
        var arr= displayArea.innerText.split("-");
        var sub=0;
        if(arr.length>2)
        {
            var sumnext=0;
            for(var i=1;i<arr.length;i++)
            sumnext+=parseInt(arr[i]);
            sub= arr[0]-sumnext
        }
        else{
            sub= arr[0]-arr[1]
        }
        //   for(var i=arr.length-1;i>=0;i--){
        //       sub=parseInt(arr[i])-sub;
        //   console.log(arr[i])
        //   }
          displayArea.innerText=sub;
        //   alert(sub)
  
    }
    function product(){
        var arr= displayArea.innerText.split("*");
        var prd=1;
          for(var i=0;i<arr.length;i++){
              prd*=parseInt(arr[i])
        //   console.log(arr[i])
          }
          displayArea.innerText=prd;
        //   alert(sum)
    }
    function Divide(){
        var arr= displayArea.innerText.split("/");
        var div=arr[0];
          for(var i=1;i<arr.length;i++){
              div/=parseInt(arr[i])
        //   console.log(arr[i])
          }
          displayArea.innerText=div;
        //   alert(sum)
    }

}


 

