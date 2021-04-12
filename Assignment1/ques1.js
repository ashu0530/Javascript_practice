/* 1. Write the pseudocode & a program to input credits of a Code for Cause
Campus leader and then output the badge of the lead on the basis of
the following criteria:
a. 7500 <= credits : Tera leader
b. 6000 <= credits < 7500 : Gega leader
c. 4500 <= credits < 6000 : Mega leader
d. Credits < 4500 : Rising Star */

/* Answer 1
    
   if credits >= 7500 
      give badge = Tera leader
   else if credits >= 6000 and credit < 7500
      give badge = Gega leader
   else if credits >= 4500 and credit < 6000
      give badge = Mega leader
   else if credits < 4500
      give badge = Rising Star  
                                      */


 // coding
 
 let credits = 5500;
 let badge;  // assign variable badge

 if ( credits >=7500)
 {
     badge = "Tera leader";
 }
 else if ( credits >= 6000 && credits < 7500 )   //and operator &&
 {
     badge = "Gega Star";
 }
 else if ( credits >= 4500 && credits < 6000 )
 {
     badge = "Mega Star";
 } 
 else if ( credits < 4500)
 {
     badge = "Rising Star";
 }

 console.log("Badge : "+ badge);