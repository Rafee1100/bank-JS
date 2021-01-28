 //login button event handler
 const loginBtn = document.getElementById('login');
 loginBtn.addEventListener('click',function(){
     const loginArea = document.getElementById('login-area');
     loginArea.style.display ='none';
     const transactionArea=document.getElementById('transaction-area');
     transactionArea.style.display='block';
 })

 //deposit button event handler
 const depositButton=document.getElementById('deposit');
 depositButton.addEventListener('click',function(event){
     const depositNum=getInputNumber('depositAmount')

     updateSpanText("currentDeposit",depositNum)

     updateSpanText("currentBalance",depositNum)

     document.getElementById('depositAmount').value=null;
 })

 //withdraw button event handler
 const withdrawButton = document.getElementById('withdraw');
 withdrawButton.addEventListener('click',function(){
     const withdrawNumber = getInputNumber('withdrawAmount')
     updateSpanText('currentWithdraw',withdrawNumber);

     updateSpanText('currentBalance',-1*withdrawNumber);

     document.getElementById('withdrawAmount').value=null;
     
 })

 function getInputNumber(id){
     const Amount=document.getElementById(id).value;
     const AmountNum=parseFloat(Amount);
     return AmountNum;

 }


 function updateSpanText(id,depositNum){
     const current= document.getElementById(id).innerText;
     const currentNum = parseFloat(current);

     const totalBalance = depositNum +currentNum;

     document.getElementById(id).innerText=totalBalance;

 }
