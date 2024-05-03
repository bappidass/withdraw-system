
let withdrable=document.querySelector('.withdraw-title2');
withdrable.innerHTML=10000;


let withdraw_click=document.querySelector('.withdraw-click');

function changevalue(){
  document.querySelector('.user-problem').innerHTML=`<p style="color:red;"></p>`
}


let staus='pending';

function strutus(){
  
  setTimeout(strutus,2000)
  return staus='success';
}


withdraw_click.addEventListener('click',()=>{
    let user_amount=Number(document.querySelector('.user-amount').value);
    if(user_amount==''){
      document.querySelector('.user-problem').innerHTML=`<p style="color:red;">Enter a vaild amount..</p>`
      user_amount='';
     setTimeout(changevalue,2000);
    //  changevalue();
    }else if(user_amount<100){
      document.querySelector('.user-problem').innerHTML=`<p style="color:red;">Enter amount more then 100</p>`
      user_amount='';
      setTimeout(changevalue,2000);
    }else if(user_amount>withdrable.innerHTML){
      document.querySelector('.user-problem').innerHTML=`<p style="color:red;">insufficient balance</p>`
      user_amount='';
      setTimeout(changevalue,2000);
    }else{
      withdrable.innerHTML-=user_amount;
      
      document.querySelector('.display-withdraw').innerHTML+=`<div class="display-amount-status">
        
      <div class="amount-display">
        <p>Amount</p>
        <p class="amount">${user_amount}₹</p>
      </div>
      <div class="status-display">
        <p>Status</p>
        <p class="status">${strutus()}</p>
      </div>
     </div>`;
     
    }
    user_amount='';
});
