//your JS code here. If required.
function transformingData(){
       const inputNum = document.getElementById("ip")

       let number = inputNum.value
       function p1(data){
             return  new Promise((resolve)=>{
              setTimeout(()=>{
                     resolve(data)
              },2000)
       })
       }
       function p2(data){
             return  new Promise((resolve)=>{
              setTimeout(()=>{
                     resolve(data)
              },2000)
       })
       }

       function p3(data){
       return new Promise((resolve)=>{
              setTimeout(()=>{
                     resolve(data)
              },1000)
       })
       }

       function p4(data){
       return new Promise((resolve)=>{
              setTimeout(()=>{
                     resolve(data)
              },1000)
       })
       }

       function p5(data){
       return new Promise((resolve)=>{
              setTimeout(()=>{
                     resolve(data)
              },1000)
       })
       }
  
     p1(number)
     .then((data)=>{
       let div = document.createElement("div")
       div.innerText = data
       output.append(div)
       return p2(data)
     })
     .then((data)=>{
       let div = document.createElement("div")
       div.innerText = data
       output.append(div)
       return p3(data)
     })
     .then((data)=>{
       let div = document.createElement("div")
       let ans = data-3;
       div.innerText = ans
       output.append(div)
       return p4(ans)
     })
     .then((data)=>{
       let div = document.createElement("div")
       let ans = (data/2);
       div.innerText = ans
       output.append(div)
       return p5(ans)
     })
     .then((data)=>{
       let div = document.createElement("div")
       let ans = (data+10);
       div.innerText = ans
       output.append(div)
       
     })
     .catch((err)=>{console.log(err)})
}
