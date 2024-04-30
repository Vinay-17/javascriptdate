//
function getdate(){                                         
const date= new Date()
year=date.getFullYear()
month=date.getMonth()
day=date.getDate()
hours=date.getHours()
minutes=date.getMinutes()
seconds=date.getSeconds()
return (`DATE&TIME:${year}-${month}-${day} ${hours}:${minutes}:${seconds}`)
}
console.log(getdate())

function age(birthdate){
    present=new Date()
     k=new Date(birthdate)
    diff=present-k
    age=Math.floor(diff/(86400000*365))
    return age
}
birthdate="1990-5-15"
console.log("AGE:",age(birthdate))

function birthdates(birthdates){
present=new Date()
k=new Date(birthdate)
days=k.getDate(birthdate)-present.getDate()
return days
}
birthdate="1990-5-15"
console.log("DIFFERENCE IN DAYS OF DOB:",birthdates(birthdate))

function D(birthdate1,birthdate2){
    k1=new Date(birthdate1)
    k2=new Date(birthdate2)
    day=(k2-k1)/(86400000)
    return day
    }
    birthdate1="2024-04-20" 
    birthdate2 ="2024-04-30"
    console.log("DIFFERENCE IN DAYS OF DATES:",D(birthdate1,birthdate2))

function  leapyear(year){
   if((year%4==0 && year%100==0) || (year%400==0) )
   {
    result=(`${year} IS A LEAP YEAR`)
    console.log(result)
   }
   else{
    result=(`${year} IS NOT A LEAP YEAR`)
    console.log(result)
   }
}
year=2023
leapyear(year)

    


