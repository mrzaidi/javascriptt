                //Chapter 21-25 STRING METHODS

//task 2
    /*

    */

     //Task1
     /*           
    var firstname=new Array();
    var lastname=new Array();
    var j=1;
    for (let i = 0; i < 2; i++) {
        firstname[i]=prompt(" please enter "+ "Num : "+j++ +" First name ");
    }
    j=1;

    for (let i = 0; i < 2; i++) {

        lastname[i]=prompt(" please enter "+ "Num : "+j++ +" Last name ");

    }

    var fullname=new Array();
    for (let i = 0; i < firstname.length; i++) {
        fullname[i]=firstname[i] +" "+ lastname[i];
        document.write("wellcome : "+fullname[i]+"<br>");
        
    }*/

    //task 2
    /*
  var mobilename;
   var mobname_len;
mobilename= prompt("Enter your Favorite Phone name : ");
mobname_len=mobilename.length;
document.write("Lenght of the string is : "+mobname_len);

    */
//task 3
    /*
var name="pakistani";
    var count;
    for (let i = 0; i < name.length; i++) {
        if (name[i]=="n")
         {
             document.write("index Num of ' n ' is : "+i);
            
        }
        
    }
    */

    //task 4
    /*
var name="Hello World";
   var count;
   for (let i = 0; i < name.length; i++) {
       if (name[i]=="l")
        {
            count=i;
           
       }
       
   }
   document.write("index Num of ' l ' is : "+count);
    */


    //task 5
    /*
  var name="Pakistani";
    document.write("the srting is : "+name);
    document.write("<br> Character  at index 3 : "+name[3]);

    */
  
    //Task6
     /*          
    var firstname=new Array();
    var lastname=new Array();
    var j=1;
    for (let i = 0; i < 2; i++) {
        firstname[i]=prompt(" please enter "+ "Num : "+j++ +" First name ");
    }
    j=1;

    for (let i = 0; i < 2; i++) {

        lastname[i]=prompt(" please enter "+ "Num : "+j++ +" Last name ");

    }

    
    for (let i = 0; i < firstname.length; i++) {
       
        document.write("wellcome : "+ firstname[i].concat(" "+lastname[i]) +"<br>");
        
    }
    */


    //task 7
    /*
var name="hyderabad";
    document.write("City name : "+name);
    name=name.replace("hyder","islam");
    document.write("<br> After replacement : "+name);
    */
    

        //task 8
    /*
var name="Ali and Sami are best friends. They play cricket and football together.";
    document.write("original string : "+name);
    name=name.replace(/and/g,"&");
    document.write("<br> After replacement : "+name);
    */

         //task 9
    /*


    var string_value="472";
    document.write("Value : "+string_value+ "<br>"+"Type : "+ typeof string_value);
    var string_value=parseInt(string_value);
    document.write("<br> Value : "+string_value+ "<br>"+"Type : "+ typeof string_value);

    */


         //task 10
    /*

    var user_input=prompt("Enter Any thing  ");
    alert("User input : "+user_input +"\nUpper case "+ user_input.toUpperCase());

   
    */

   //task 11
    /*

var user_input=prompt("Enter Any thing  ");
var display=user_input;
user_input=user_input.toLowerCase();
user_input=user_input.split(' ');
for(var i=0;i<user_input.length;i++)
{
    user_input[i]=user_input[i].charAt(0).toUpperCase()+user_input[i].slice(1);
}
user_input=user_input.join(' ');
alert("User Input : "+display+"\n\nTitle Case : "+ user_input);
   
    */


      //task 12
    /*
 var num=35.36;
   document.write("Number : "+num);
   num=num.toString();
   num=num.replace('.','');
   document.write("<br> Result : "+num);

    */


     //task 13
    /*
 var user_input=prompt("Enter User Name ");

var valid=0;

for (var i = 0;i < user_input.length ;i++) {
        
var key_code=user_input[i].charCodeAt();
    if (key_code ==33||key_code ==44||key_code ==46||key_code ==64) {
        valid=1;
        
    }
    
}
if (valid===0) {
    alert("Wellcome");
    
} 
else {
alert("Invalid User name");
    
}
   */



         //task 14
    /*

   var arr=["cake", "apple pie", "cookie", "chips", "patties"];
   var user_input=prompt("Enter your order");
   
   var display=user_input.toLowerCase();
   display=arr.indexOf(display);
   if (display >= 0) {
    alert(user_input+" is available at index : "+ display+" in our bakery");
       
   }
   else{
       alert("not available at our bakery");
   }
   
    */
   


         //task 15
 /*

  var password=prompt("Enter Password ");
var num=0;
var alpha=0;
var extra=0;
usman();

function usman()
{
    if (password.length < 6) {
        alert("It must at least 6 characters long");
         password=prompt("Enter a valid Password ");
         usman();   
    }
    else if (password.charAt(0)>=0)
    {
        alert("It should not start with a number");
        password=prompt("Enter a valid  Password ");
        usman(); 
    }
    else if(password.length > 5 && password.charAt(0)!= 0 )
    {
        for (let i = 0; i < password.length; i++) {
            var display;
            display=password[i].charCodeAt()
            if(display>=48 && display<=57)
            {
                num=1;
                extra=0;
            }
            else if (display>=65 && display<=90|| display>=97 && display<=122)
            {
                alpha=1;
                extra=0;

            }
            else
            {
                extra=1;
            }

            
        }
        if(num ==1 && alpha == 1 && extra==0)
        {
            alert("Wellcome");
        }
        else if(extra==1 || num==0 || alpha==0)
        {
            alert("Password must contain  a-z, A-Z & 0-9")
            password=prompt("Enter a valid  Password ");
            usman();
        }
        

    }

}

   
    */


    //task16
/*
var university = "University of Karachi";
university=university.split('');
for (let i = 0; i < university.length; i++) {
    document.write(university[i]+"<br>");
}
*/


   //task17
/*
var user_input="Pakistan";
document.write("User Input : "+user_input);
user_input=user_input.charAt(user_input.length-1);
document.write("<br>Last Character of input : "+user_input);

*/



   //task18
/*
var university = "The quick brown fox jumps over the lazy dog";
university=university.toLowerCase();
university=university.split(' ');
var count=0;
var s=" ";
for (let i = 0; i < university.length; i++) {
    if (university[i]=="the") {
        count+=1;
        
    }
    

}
if (count>1) {
    s="s";
    
}
document.write("<br> There are ' "+count+" ' Occurrence"+s+" of the word ' the '");


*/

            // Chapter 26 to 30
//task1
/*
var user_input=prompt("Enter positive number ");
if (user_input<0) {
    alert("Error \n Enter positive number")
    user_input=prompt("Enter positive number ");
}
else
{
    document.write("Number : "+user_input);
    document.write("<br>Round off value  : "+Math.round(user_input));
    document.write("<br>Floor value  : "+Math.floor(user_input));
    document.write("<br>Ceil value : "+Math.ceil(user_input));
    
    
}
*/


// Task # 2

// var usrInp = +prompt("enter any negative number");
// var roundOff = Math.round(usrInp);
// var NumFloor = Math.floor(usrInp);
// var NumCiel = Math.ceil(usrInp); 
// alert("Number: "+usrInp+"\nRound Off: "+roundOff+"\nFloor number: "+NumFloor+"\nCiel number: "+NumCiel);

// Task # 3

// var UrIn = +prompt("Enter value");
// alert("The absolute value of "+UrIn+" is "+ Math.abs(UrIn));

// Task # 4

// var dice = Math.floor(Math.random()*6+1)
// alert("Dice value: "+dice);

// TAsk # 5 

// var val = Math.random();
// if ( val < 0.5){
//     alert("Heads");
// }
// else{
//     alert("Tails");
// }

// Task # 6 

// var randomNumber = Math.floor(Math.random() * 100);
// alert("Random number from 1-100 is: "+randomNumber);

// Task # 7

// var weight = prompt("Enter your weight in Kilograms");
// var ConvWeight = parseInt(weight);
// alert("The weight of user in kilograms is "+ConvWeight);

// Task # 8

// var secretNum =  Math.floor(Math.random() * 10);
// for(i = 0; i < 5; i++){
// var secretNumGuess = +prompt("Guess any number from 1 - 10\nYou have 5 tries :)");
// if(secretNum == secretNumGuess){
//     alert("Correct number");
// }
// else{
//     alert("Wrong");
// }
// }

/*--------------------------------------------------------------------------*/

// Chap # 31-34

// Task # 1

// var NewDate = new Date();
// document.writeln("Current date is ".bold()+"<br>"+NewDate);

// Task # 2

// var month = new Array();
//   month[0] = "January";
//   month[1] = "February";
//   month[2] = "March";
//   month[3] = "April";
//   month[4] = "May";
//   month[5] = "June";
//   month[6] = "July";
//   month[7] = "August";
//   month[8] = "September";
//   month[9] = "October";
//   month[10] = "November";
//   month[11] = "December";

//   var MyDate = new Date();
//   var MonthName = month[MyDate.getMonth()];
//   alert("Current month is "+MonthName);

// Task # 3

// var dayName = new Array();
// dayName[0] = "Sun";
// dayName[1] = "Mon";
// dayName[2] = "Tue";
// dayName[3] = "Wed";
// dayName[4] = "Thur";
// dayName[5] = "Fri";
// dayName[6] = "Sat";
//   var tdy = new Date();
//   var dayz = dayName[tdy.getDay()];
//   alert("today is "+dayz)

// Task # 4

// var DName = new Array();
// DName[0] = "Sun";
// DName[1] = "Mon";
// DName[2] = "Tue";
// DName[3] = "Wed";
// DName[4] = "Thur";
// DName[5] = "Fri";
// DName[6] = "Sat";
//   var today = new Date();
//   var din = DName[today.getDay()];
//   alert("today is "+din)
//   if(din == "Sat"){
//       alert("Today is fun Day!");
//   }
//   else if(din == "Sun"){
//     alert("Today is fun Day!");
// }
// else{
//     alert("Kaam pr jao aaj!");
// }

// Task # 5

// var t = new Date();
// var TodaysDate = t.getDate();
// if(TodaysDate < 15){
//     alert("Today's date is "+TodaysDate+"\nFirst 15 days of month");
// }
// else{
//     alert("Today's date is "+TodaysDate+"\nLast 15 days of month");    
// }

// Task # 6

// var CurDate = new Date();
// var milliSeconds = CurDate.getTime();
// var mins = Math.floor(milliSeconds / 60000);
// document.writeln("Current date is ".bold()+CurDate+"<br>"+"<br>"+"Milliseconds since midnight, Jan. 1,1970: ".bold()+milliSeconds+"<br>"+"<br>"+"Minutes since midnight, Jan. 1970: ".bold()+mins);

// Task # 7

// var AjKiDate = new Date();
// var hourz = AjKiDate.getHours();
// if(hourz > 12){
//     alert("Time is "+hourz+"\nIts P.M")
// }
// else{
//     alert("Time is "+hourz+"\nIts A.M")
// }

// Task # 8

// var LaterDay = new Date(new Date().getFullYear(), 11, 31);
// document.writeln("Last Day of this year is: ".bold()+LaterDay);

// Task # 9

// var date_1 = new Date('04/25/2020');
// var date_2 = new Date();
// var diff_Time = Math.abs(date_2 - date_1);
// var diff_Days = Math.ceil(diff_Time / (1000 * 60 * 60 * 24));
// alert(diff_Days + " days have passed since 1st Ramadan 2020");

// Task # 10

// var date1 = new Date();
// var date2 = new Date("Dec 05, 2015 20:15:16");
// var seconds = Math.abs(date1 - date2) / 1000;
// alert("From reference date: "+date2+"\n"+Math.ceil(seconds)+" seconds have passed away");

// TAsk # 11

// var presentDate = new Date();
// document.writeln("Current date is: ".bold()+presentDate);
// presentDate.setHours(presentDate.getHours() - 1);
// document.writeln("<br> One hour ago: ".bold()+presentDate);

// TAsk # 12

// var DateAgo = new Date();
// document.writeln("Current date is: ".bold()+DateAgo);
// DateAgo.setFullYear(DateAgo.getFullYear() - 100);
// document.writeln("<br> 100 years ago date was: ".bold()+DateAgo);

// Task # 13

// var My_Date = new Date();
// var CurrentAge = +prompt("enter age")
// My_Date.setFullYear(My_Date.getFullYear() - CurrentAge);
// var YearOfBirth = My_Date.getFullYear()
// document.writeln("<br> Your year of birth is: ".bold()+YearOfBirth);

// Task # 14

// var ConsumerName = prompt("Enter your name");
// var CurrentMonth = prompt("Enter current month");
// var NumOfUnits = +prompt("Enter number of units");
// var ChargesPerUnit = 16, LatePaymentCharges = 350, NetPayment = (NumOfUnits * ChargesPerUnit), Late_Payment = (NumOfUnits * ChargesPerUnit) + LatePaymentCharges;
// document.writeln("K-Electric Bill".bold()+"<br> Consumer Name: "+ConsumerName+"<br> Current Month: "+CurrentMonth+"<br> No. of Units: "+NumOfUnits+"<br> Per Unit Charges: "+ChargesPerUnit);
// document.writeln("<br><br> Net Payable Amount (Within Due Date): "+Math.round(NetPayment)+"<br> Gross Payable Amount (After Due Date): "+Math.round(Late_Payment)+"<br> Late Payment Charges: "+LatePaymentCharges);

/*--------------------------------------------------------------------------*/

// Chap # 35-38

// Task # 1

// function tellDateAndTime() {
//     var now = new Date();
//     document.writeln(now)
// }
// tellDateAndTime();

// Task # 2

// function NameGreeting(){
//     var First_Name = prompt("Enter your first name");
//     var Last_Name = prompt("Enter your last name");
//     alert("Welcome "+First_Name+" "+Last_Name);
// }
// NameGreeting();

// Task # 3

// function addition(First_Num,Second_Num,Result_Num){
//     First_Num = +prompt("enter first number");
//     Second_Num = +prompt("Enter second number");
//     Result_Num = First_Num + Second_Num
//     alert(Result_Num)
// }
// addition();

// Task # 4

// function calculator(Num_1, Num_2, Res_3, opt){
//     Num_1 = +prompt("Enter 1st operand")
//     Num_2 = +prompt("Enter 2nd operand")
//     opt = prompt("Enter operator")
//     if(opt === "+"){
//         Res_3 = Num_1 + Num_2
//         alert(Res_3)
//     }
//     else if(opt === "-"){
//         Res_3 = Num_1 - Num_2
//         alert(Res_3)
//     }
//     else if(opt === "*"){
//         Res_3 = Num_1 * Num_2
//         alert(Res_3)
//     }
//     else if(opt === "/"){
//         Res_3 = Num_1 / Num_2
//         alert(Res_3)
//     }
//     else{
//         alert("Invalid operator")
//     }
// }
// calculator();

// Task # 5

// function squaring(a){
//     a= +prompt("enter any num");
//     alert("Square of your number is "+a*a)
// }
// squaring();

// Task # 6

// function factorial(){
//     var input = +prompt("Enter the number for factorial");
//     var result = input;

// for(var i=1;i < input;i++){
//   result = i * result;
// }
// alert("The factorial of "+input+" is "+result);
// }
// factorial();

// Task # 7

// function counting(){
//     var startNum = +prompt("Enter starting num")
//     var endNum = +prompt("Enter ending num")
//     for(var j = startNum; j <= endNum; j++){
//         document.writeln(j+"<br>")
//     }
// }
// counting();

// Task # 8

// function findHypotenuse(base, per)
//     { 
//         base = +prompt("Enter value for base");
//         per = +prompt("Enter value for perpendicular");
//         var h = Math.sqrt((base * base) + (per * per)); 
//         alert("The value of hypotenuse is "+h) 
//     } 
// findHypotenuse();

// Task # 9

// function CalculateArea(height,widht,area){
//     height = +prompt("Enter value for Height")
//     widht = +prompt("Enter value for Widht")
//     area = height*widht;
//     alert("Area of rectangle is "+area);
// }
// CalculateArea();

// TAsk # 10

// function ReverseString(strOne, strTwo) {
//     strOne = prompt("enter word");
//     strTwo = strOne; 
// strOne =  strOne.split('').reverse().join('') 
// if (strTwo === strOne){
//     alert("Its a palindrome")
// }
// else{
//     alert("Its a Not palindrome")
// }
// } 
// ReverseString()

// Task # 11

// function first_letter_capital(letterOne)
// {
//  return letterOne.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// document.writeln(first_letter_capital('the quick brown fix'));

// TAsk # 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.writeln("The longest word is "+find_longest_word('Web Development Tutorial'));

// task # 13

// function character_counting(str_1, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str_1.length; position++) 
//  {
//     if (str_1.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(character_counting('w3resource.com', 'o'));

// TAsk # 14

// function calcCircumference(){
//     var radius = +prompt("Enter radius to calculate circumference")
//     var circum = (2 * 3.14 *radius);
//     alert("The circumference is "+circum);
// }
// function calcArea(){
//     var radius_1 = +prompt("Enter radius to calculate are of circle")
//     var area_1 = (3.14 *(radius_1*radius_1));
//     alert("The area is "+area_1);
// }
// calcCircumference();
// calcArea();