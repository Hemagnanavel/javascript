let form = document.getElementsByClassName("form");
const fname = document.getElementsByClassName("fname");
const role = document.getElementsByClassName("role");
const email = document.getElementsByClassName("email");
const dob = document.getElementsByClassName("dob");
const std = document.getElementsByClassName("std");
const textBox = document.getElementsByClassName('textBox');
const gender=document.getElementsByClassName('gender');
const male = document.getElementById('male');
const female = document.getElementById('female');
const button = document.getElementById("button");
let re = /\S+@\S+\.\S+/;
let reg = /^[a-zA-Z\-'#(),"]*$/;
let regs = /^[a-zA-Z\-'#(),"]*$/;
let count = 0;


form[count].addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputsvalue = [fname, role, email, dob, gender, textBox];
    //console.log(std[0].value);
   // console.log(fname[count].value);
    let invaildinput = false;
    inputsvalue.forEach(element=> {
        
        if (!element[count].value){
           // console.log('hh',element[0].value);
            invaildinput = true;
            alert(" All Inputs Field are must be filled");
        }
    });
    if (!male.checked &&  !female.checked) {
        alert(" All Inputs Field are must be filled");
        invaildinput = true;
    }
    if (!invaildinput) {
        addStudent();
        form[count].reset();
    }
   
})


function addStudent() {
    let role = document.sample.role[count].value;
    let name = document.sample.name[count].value;
    let email = document.sample.email[count].value;
    let dob = document.sample.dob[count].value;
    let age = document.sample.age[count].value;
    let gender = document.sample.gender[count].value;
    let std = document.sample.std[count].value;


    let tr = document.createElement('tr');

    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));
    let td5 = tr.appendChild(document.createElement('td'));
    let td6 = tr.appendChild(document.createElement('td'));
    let td7 = tr.appendChild(document.createElement('td'));
    td1.innerHTML = name;
    td2.innerHTML = role;
    td3.innerHTML = email;
    td4.innerHTML = dob;
    td5.innerHTML = age;
    td6.innerHTML = gender;
    td7.innerHTML = std;

    document.getElementById("tbl").appendChild(tr);
}

//dynamic form
form[count].addEventListener("input",addbt);
button.disabled=true;
function addbt(){
    //let inputfiled=[fname, role, email, dob, std,gender, textBox];
    const inputfiled=[fname[count].value, role[count].value, email[count].value, dob[count].value, std[count].value, textBox[count].value];
    //console.log();
    let inputempty=false;
   for( let ele of inputfiled){
    //console.log('ss',ele.value);
    if(!ele){
        //console.log(ele.value);
        button.disabled=true;
        break;
    }
    else{
        button.disabled=false;
    }
   
   }

}


// word count
const maxWords = 200;
textBox[count].addEventListener('input', () => {
    const words = textBox[count].value.trim().split(' ');
    const wordCount = words.length;
    //console.log(textBox[0].value);
    if (wordCount > maxWords) {
        textBox.value[count] = words.slice(0, maxWords).join(' ');
    }
    document.getElementsByClassName('wordCount')[count].innerText = `${wordCount} / ${maxWords}`;
});


//age conversation
function ages() {
    const dobInput = document.getElementsByClassName("dob")[count].value;
    let x = new Date(dobInput);
    let y = new Date();
    let z = y - x;
    let ms = z / 1000;
    let s = ms / 60;
    let mi = s / 60;
    let hour = mi / 24;
    let day = hour / 1;
    let year = Math.floor(day / 365);
    //console.log(year);
    document.getElementsByClassName("age")[count].value = year;
}
//email validation

function emails() {
   // console.log(email[0].value);
   // console.log(re);
    let valemail = document.getElementsByClassName("valemail");
    if (!re.test(email[count].value)) {
        valemail[count].textContent = "invalid email id";
        valemail[count].style.color = "red";
        email[count].style.borderColor = "red";
    }
    else {
        valemail[count].textContent = "";
        email[count].style.borderColor = "black";
    }
}

// name 


function strings() {

    let valname = document.getElementsByClassName("valname");
    // console.log(fname[0].value);
    // console.log(reg,"hjkjh");
    if (!reg.test(fname[count].value)) {
        valname[count].textContent = "invalid name";
        valname[count].style.color = "red";
        fname[count].style.borderColor = "red";
    }
    else {
        valname[count].textContent = "";
        fname[count].style.borderColor = "black";

    }
}
//role


function roles() {

    let valrole = document.getElementsByClassName("valrole");
    if (!regs.test(role[count].value)) {
        valrole[count].textContent = "invalid name";
        valrole[count].style.color = "red";
        role[count].style.borderColor = "red";
    }
    else {
        valrole[count].textContent = "";
        role[count].style.borderColor = "black";

    }
}
//dob

function dobs() {
    let today = new Date();
    let daa = new Date(dob[count].value);
    let valdob = document.getElementsByClassName("valdob");

    if (daa > today) {
        valdob[count].textContent = "invalid DOB";
        valdob[count].style.color = "red";
        role[count].style.borderColor = "red";
    }
    else {
        valdob[count].textContent = "";
        role[count].style.borderColor = "black";

    }
}
// table visible
function showStuff() {
    document.getElementById('visible').style.display = 'block';
}
// create more from

function addform() {
    let dynamicform = document.getElementById('dynamicform');
    count++;
    dynamicform.innerHTML += `<form class="form" method="POST" name="sample" >
            <div class="formcontainer">
                <label class="text">Name:</label>
                <input class="inputs fname" type="text"  name="name" oninput="strings()" value=""><br>
                <div>
                    <span class="valname"></span>
                </div>
                <label class="text"> Role:</label>
                <input  class="inputs role" oninput="roles()" name="rollno">
                <div>
                    <span class="valrole"></span>
                </div>

                <br>
                <label class="text">Email :</label>
                <input class="inputs email" type="email" oninput="emails()" name="email">
                <div>
                    <span class="valemail"></span>
                </div>

                <br>
                <label class="text"> DOB :</label>
                <input  class="inputs dob" name="dob" oninput="dobs()" onchange="ages()" type="date">
                <div>
                    <span class="valdob"></span>
                </div>

                <br>
                <label class="text"> Age :<input  class=" age inputs" name="age" type="number"></label>
                <br>
                <label class="text"> Gender :
                    <input type="radio" name="gender" value="Female">Female
                    <input type="radio" name="gender" value="male">Male
                </label>
                <br>
                <label class="text">Class :
                    <select id="std" class="inputs" name="std" required>
                        <option class="text" value=" "></option>
                        <option class="text" value="I">I</option>
                        <option class="text" value="II">II</option>
                        <option class="text" value="III">III</option>
                        <option class="text" value="IV">IV</option>
                        <option class="text" value="V">V</option>
                        <option class="text" value="VI">VI</option>
                        <option class="text" value="VII">VII</option>
                        <option class="text" value="VIII">VIII</option>
                        <option class="text" value="IX">IX</option>
                        <option class="text" value="X">X</option>
                        <option class="text" value="XI">XI</option>
                        <option class="text" value="XII">XII</option>
                    </select>
                </label>
                <br>

               <textarea  class="inputs text textBox"  name="textinput"
                placeholder="Write about yourself"></textarea>
                <p>Word count: <span class="wordCount">0 / 200</span></p>
        <br>

                <div class="addsection">
                    <input id="button" type="button" class="addbtn" value="Add" onclick="addform()">
                </div>
            </div>`
}
