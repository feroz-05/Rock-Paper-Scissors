let rand=0;
let finalResult ='';
let dataObj =JSON.parse(localStorage.getItem('dataObj'));
if(dataObj===null){
    dataObj = {Wins:0,Loose:0,Tie:0}
}
        
console.log(dataObj);
let computerResult=''
function computer(){
    rand= Math.round(Math.random()*2);
    if(rand === 1){
        computerResult='rock';
    }
    else if(rand === 0){
        computerResult='paper';
    }
    else if(rand === 2){
        computerResult='scissor';
    }   
    
document.querySelector(".reset-button").innerHTML= 'Clear';
}
computer();



function choosed(data){
    console.log('you choosed',data);
    if(data === 'paper'){
        if(computerResult === data){
            finalResult='Tie';
            dataObj.Tie += 1;
        }
        else if(computerResult === 'scissor'){
            finalResult='You Loose';
            dataObj.Loose +=1;
        }
        else if(computerResult === 'rock'){
            finalResult='You Win';
            dataObj.Wins +=1;
        }
    }
    if(data === 'rock'){
        if(computerResult === data){
            finalResult='Tie';
            dataObj.Tie += 1;
        }
        else if(computerResult === 'scissor'){
            finalResult='You Win';
            dataObj.Wins +=1;
        }
        else if(computerResult === 'paper'){
            finalResult='You Loose';
            dataObj.Loose +=1;
        }
    }
    if(data === 'scissor'){
        if(computerResult === data){
            finalResult='Tie';
            dataObj.Tie += 1;
        }
        else if(computerResult === 'rock'){
            finalResult='You Loose';
            dataObj.Loose +=1;
        }
        else if(computerResult === 'paper'){
            finalResult='You Win';
            dataObj.Wins +=1;
        }
}
console.log(finalResult);
document.querySelector(".result").innerHTML =`${finalResult}`;
document.querySelector(".choosed").innerHTML= `You Choosed ${data} & ${computerResult} Computer`;
document.querySelector(".data").innerHTML= `Wins: ${dataObj.Wins} 
    Looses: ${dataObj.Loose} Tie: ${dataObj.Tie}`; 
    localStorage.setItem('dataObj',JSON.stringify(dataObj))
}

function deleted(){
    console.log('deleted');
    console.log( dataObj = {Wins:0,Loose:0,Tie:0});
    document.querySelector(".data").innerHTML= `Wins:
        ${dataObj.Wins} 
    Looses: ${dataObj.Loose} Tie: ${dataObj.Tie}`;
    document.querySelector(".result").innerHTML ='';
document.querySelector(".choosed").innerHTML= '';
document.querySelector(".reset-button").innerHTML= 'Cleared';
}

