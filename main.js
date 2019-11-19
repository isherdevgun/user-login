document.getElementById('login').addEventListener('click',login);
function login(){
    let username = "idevgun";
    let password = "isherjyot";
    let input1= document.getElementById('user').value;
    let input2=document.getElementById('pass').value;
    let check= 0

    if (username==input1) {
      check+= 1;
    }
    else {
        check-=3;
    }

    if( password==input2){
        check+=1;
    }
    else{
        check-=4;
    }

    if( check==2){
        alert('Login Successful')
    } else if ( check== -7 )
    {
        alert('Login Unsuccesful, Invalid Username & Password')
    }
    else if( check== -3){
        alert('Login Unsuccesful, Invalid Password')
    }
    else {
        alert('Login Unsuccesful, Invalid Username')
    }


}