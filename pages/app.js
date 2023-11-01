function login(){
    const user = document.getElementById("fname").value;
    localStorage.setItem('FIRST NAME', user);
    return;
}

