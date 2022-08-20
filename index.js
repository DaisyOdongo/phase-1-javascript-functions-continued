function saturdayFun(rollerSkate= "roller-skate"){
     return `This Saturday, I want to ${rollerSkate}!`
    
}

function mondayWork(goToTheOffice = 'go to the office'){
    return `This Monday, I will ${goToTheOffice}.`
   
}
function wrapAdjective(door = '*') {
   return function (name, adverb = "special") {
     return (`You are ${door}${name}${door}!`)
   };
   }