//Scroll Code

 jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});


//Calculation

 function calculate_amount_monthly(){
 var interest=0.087;
 var month_name=[" ","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMPBER","OCTOBER","NOVEMBER","DECEMBER","JANUARY","FEBRUARY","MARCH"];
 var deposited=document.getElementById("deposit");
 var month_index=document.getElementById("month");
 var month=month_index.options[month_index.selectedIndex].value;
 var interest_amount=[];
 var deposit=parseInt(deposited.value);
 var i,total_interest=0,year=2016;
  document.write('\<link rel="stylesheet" type="text/css" href="css/style.css">');
 document.write("<center><table border=1>");
     document.write("<tr><th>YEAR</th><th>MONTH</th><th>DEPOSIT</th><th>INTEREST</th><th>BALANCE</th></tr>");

 for(i=month;i<=12;i++){
             interest_amount[i]=Math.round(deposit*interest); 
     }
 
 for(i=month;i<=12;i++){
     document.write("<tr><td>",year,"</td>");
     document.write("<td>",month_name[i]);
     document.write("</td><td>",deposit);
    document.write("</td><td>",interest_amount[i],"</td>");
    if(i<12)
    document.write("<td>"," ","</td>");
    
  }
  
 for(var j=2;j<=25;j++){
     year++;
  for(i=month;i<=12;i++){
      total_interest+=interest_amount[i];
      } 
  deposit+=Math.round(total_interest);
  total_interest=0;
  document.write("<td>",deposit,"</td>");
  interest_amount=[];
  for(i=1;i<=12;i++){
      interest_amount[i]=Math.round(deposit*interest);
      document.write("<tr><td>",year);
      document.write("</td><td>",month_name[i]);
      document.write("</td><td>",deposit);
      document.write("</td><td>",interest_amount[i],"</td>");
      if(i<12)
      document.write("<td>"," ","</td>");
  }
  
 }
 document.write("<td>"," ","</td>");
  document.write("</table><br/>");
	 document.write("<table><tr><td>")
	 document.write('\<input type="button" value="Back" onclick="window.location.href=\'ppf.html\'">');
     document.write("</td></tr></table></center>");
}
 function calculate_amount_yearly(){
    
   	 var interest=0.087;
     var interest_amount=0;
     var deposited=document.getElementById("deposited");
     var deposit=parseInt(deposited.value);
     var balance=0,prev_balance=0,i,prev_loan_balance=0,prev_withdrawal_balance=0,pb=0,year=2016;
     document.write('\<link rel="stylesheet" type="text/css" href="css/style.css">');
     document.write("<center><table border=1>");
     document.write("<tr><th>YEAR</th><th>DEPOSIT</th><th>PREV_BALANCE</th><th>YEARLY INTEREST</th><th>BALANCE</th><th>ELIGIBLE LOAN</th><th>ELIGIBLE WITHDRAW AMOUNT</th></tr>");
     for(i=0;i<15;i++){
         document.write("<tr>")
         document.write("<td>",year++);
         document.write("</td><td>",deposit);
         interest_amount=Math.round((deposit+prev_balance)*interest);
         balance=Math.round(deposit+prev_balance+interest_amount);
         document.write("</td><td>",prev_balance);
         document.write("</td><td>",interest_amount);
         document.write("</td><td>",balance);
         calculate_loan(prev_loan_balance,i);
         calculate_withdrawal(pb,i);
         pb=prev_withdrawal_balance;
         prev_withdrawal_balance=prev_loan_balance;
         prev_loan_balance=prev_balance;
         prev_balance=balance;
         document.write("</td></tr>");
     }
	
     document.write("</table><br/>");
	 document.write("<table><tr><td>")
	 document.write('\<input type="button" value="Back" onclick="window.location.href=\'ppf.html\'">');
     document.write("</td></tr></table></center>");
 }
 function calculate_loan(end_amount,i){
     var loan_amount=0;
     var loan_rate=0.25;
     if(i>=2&&i<=5)
     loan_amount=end_amount*loan_rate;
     document.write("</td><td>",loan_amount);
     
 }
 function calculate_withdrawal(end_amount,i){
     var withdrawal_amount=0;
     var withdraw_rate=0.5;
     if(i>=6)
     withdrawal_amount=end_amount*withdraw_rate;
     document.write("</td><td>",withdrawal_amount);
     
 }
 function calculate_variable_amount_yearly(){
	 var interest=0.087;
	 var interest_amount=0;
	 var deposit=new Array(16);
     var deposited=document.getElementById("year1");
     deposit[0]=parseInt(deposited.value);
	 var deposited=document.getElementById("year2");
	 deposit[1]=parseInt(deposited.value);
	 var deposited=document.getElementById("year3");
	 deposit[2]=parseInt(deposited.value);
	 var deposited=document.getElementById("year4");
	 deposit[3]=parseInt(deposited.value);
	 var deposited=document.getElementById("year5");
	 deposit[4]=parseInt(deposited.value);
	 var deposited=document.getElementById("year6");
	 deposit[5]=parseInt(deposited.value);
	 var deposited=document.getElementById("year7");
	 deposit[6]=parseInt(deposited.value);
	 var deposited=document.getElementById("year8");
	 deposit[7]=parseInt(deposited.value);
	 var deposited=document.getElementById("year9");
	 deposit[8]=parseInt(deposited.value);
	 var deposited=document.getElementById("year10");
	 deposit[9]=parseInt(deposited.value);
	 var deposited=document.getElementById("year11");
	 deposit[10]=parseInt(deposited.value);
	 var deposited=document.getElementById("year12");
	 deposit[11]=parseInt(deposited.value);
	 var deposited=document.getElementById("year13");
	 deposit[12]=parseInt(deposited.value);
	 var deposited=document.getElementById("year14");
	 deposit[13]=parseInt(deposited.value);
	 var deposited=document.getElementById("year15");
	 deposit[14]=parseInt(deposited.value);
	 var balance=0,prev_balance=0,i,prev_loan_balance=0,prev_withdrawal_balance=0,pb=0,year=2016;
     document.write('\<link rel="stylesheet" type="text/css" href="css/style.css">');
     document.write("<center><table border=1>");
     document.write("<tr><th>YEAR</th><th>DEPOSIT</th><th>PREV_BALANCE</th><th>YEARLY INTEREST</th><th>BALANCE</th><th>ELIGIBLE LOAN</th><th>ELIGIBLE WITHDRAW AMOUNT</th></tr>");
     for(i=0;i<15;i++){
         document.write("<tr>")
         document.write("<td>",year++);
         document.write("</td><td>",deposit[i]);
         interest_amount=Math.round((deposit[i]+prev_balance)*interest);
         balance=Math.round(deposit[i]+prev_balance+interest_amount);
         document.write("</td><td>",prev_balance);
         document.write("</td><td>",interest_amount);
         document.write("</td><td>",balance);
         calculate_loan(prev_loan_balance,i);
         calculate_withdrawal(pb,i);
         pb=prev_withdrawal_balance;
         prev_withdrawal_balance=prev_loan_balance;
         prev_loan_balance=prev_balance;
         prev_balance=balance;
         document.write("</td></tr>");
     }
	
     document.write("</table><br/>");
	 document.write("<table><tr><td>")
	 document.write('\<input type="button" value="Back" onclick="window.location.href=\'ppf.html\'">');
     document.write("</td></tr></table></center>");
 }
	 
	 	 
 
 
 