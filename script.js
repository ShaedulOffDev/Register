var $ = (x) => { 
    return document.querySelector(x);
};
var $$ = (x) => {
  return document.querySelectorAll(x);
};
// ! DOM start
var loadName = $('.load_name'),
    dot = 'Loading.',
    loader = $('.loader'),
    wrap = $(".wrap"),
    lon = $('.lon'),
    logOut = $('.log_out'),
    change = $(".changing_btn"),
    log = $(".log"),
    sign = $(".sign"),
    cont = $(".container"),
    r1 = $("#r1"),
    r2 = $("#r2"),
    r3 = $("#r3"),
    r4 = $("#r4"),
    r5 = $("#r5"),
    ls = localStorage.getItem("anim"),
    clas,
    BAZA,
    baza19018 = localStorage.getItem("baza19018"),
    login_temp = $(".login_temp").content,
    signup_temp = $(".signup_temp").content,
    tc = login_temp.cloneNode(true);
cont.appendChild(tc);
log.appendChild(login_temp);
sign.appendChild(signup_temp);
var wrapper = $(".wrapper"),
    title = $("title"),
    btn_text = change.textContent,
    submit = $$(".submit"),
    form = $$(".form"),
    ElName = $$("#name"),
    ElEmail = $$("#email"),
    ElKey = $$("#password"),
    errors = $(".error"),
    mySite = $(".my_container"),
    bool,
    b = localStorage.getItem("bool"),
    lonLS = localStorage.getItem("lon"),
    tt = localStorage.getItem("tt"),
    bar = $(".bars"),
    radio = $(".radio"),
    iconn = $("#iconn"),
    lsb = localStorage.getItem("chbtn");
// ! DOM end

// ! LOADER start
setInterval(() => {
    if(dot.length > 10){
        dot = 'Loading';
    }else{
      loadName.textContent = dot;
      dot += '.'
    }
}, 500);
// ! LOADER end

// ! PASSWORD start
wrap.addEventListener('click', (e) => {
    var password = wrap.querySelectorAll("#password");
    if (e.target.className == "fa fa-eye") {
        e.target.className = "fa fa-eye-slash";
        for (let index = 0; index < 3; index++) {
          Array.from(password)[index].type = "text";
        }
    }else if (e.target.className == 'fa fa-eye-slash') {
        e.target.className = "fa fa-eye";
        for (let index = 0; index < 3; index++) {
            Array.from(password)[index].type = "password";
        }
    }
})
// ! PASSWORD end

// ! RADIO start
if(ls){
    if (ls == "wh") {
      r1.checked = true;
      clas = "wh";
    } else if (ls == "sk") {
      r2.checked = true;
      clas = "sk";
    } else if (ls == "rt") {
      r3.checked = true;
      clas = "rt";
    } else if (ls == "sc") {
      r4.checked = true;
      clas = "sc";
    } else if (ls == "t") {
      r5.checked = true;
      clas = "t";
    }
}else {
    clas = 'wh';
    r1.checked = true;
}
r1.addEventListener('click', () => {
    clas = 'wh';
    localStorage.setItem('anim', clas);
});
r2.addEventListener("click", () => {
    clas = "sk";
    localStorage.setItem("anim", clas);
});
r3.addEventListener("click", () => {
    clas = "rt";
    localStorage.setItem("anim", clas);
});
r4.addEventListener("click", () => {
    clas = "sc";
    localStorage.setItem("anim", clas);
});
r5.addEventListener("click", () => {
    clas = "t";
    localStorage.setItem("anim", clas);
});
// ! RADIO end

// ! BAZA start
if(baza19018){
    BAZA = JSON.parse(baza19018);
}else{
    BAZA = [];
}
// ! BAZA end

// ! SITE OPEN start
if(b === 'true'){
    if(tt){
      title.textContent = tt;
    }
    bool = b;
    wrapper.style.display = "none";
    mySite.style.display = "flex";
    if(lonLS){
      lon.textContent = lonLS;
    }
}
// ! SITE OPEN end

// ! FORM [0, 1, 2] start
form[0].addEventListener("click", (x) => {
  x.preventDefault();
  if (x.target.className == "submit") {
    if (ElName[0].value.trim() === "" || ElKey[0].value.trim() === "") {
        alert("To'ldirilmagan!");
        return;
    }
    for (let i = 0; i < BAZA.length; i++) {
        if (ElName[0].value !== BAZA[i].name || ElKey[0].value !== BAZA[i].key) {
            bool = false;
            localStorage.setItem("bool", bool);            
        }else{
            bool = true;
            localStorage.setItem('bool', bool);
        }
    }
    }
    if (bool) {
        title.textContent = "Shaedul_Off's Site";
        localStorage.setItem('tt', title.textContent);
        wrapper.style.display = 'none';
        errors.style.display = "none";
        for (let index = 0; index < 2; index++) {
          ElKey[index].classList.remove("dsh");
          ElName[index].classList.remove("dsh");
          lon.textContent = ElName[1].value;
          localStorage.setItem("lon", lon.textContent);
          ElName[index].value = "";
          ElKey[index].value = "";
        }
        setTimeout(() => {
            loader.style.display = 'none';
            mySite.style.display = 'flex';
        }, 5000);
    } else {
        errors.style.display = "flex";
        for (let index = 0; index < 2; index++) {
            ElKey[index].classList.add("dsh");
            ElName[index].classList.add("dsh");
            ElKey[index].value = "";
        }
    }
  }
);
form[1].addEventListener("click", (x) => {
  x.preventDefault();
  if (x.target.className == "submit") {
    if(ElName[1].value.trim() == '' || ElKey[1].value.trim() == ''){
        alert('To\'ldirilmagan!');
        return;
    }
    for (let i = 0; i < BAZA.length; i++){
        if(ElName[1].value !== BAZA[i].name || ElKey[1].value !== BAZA[i].key){
            bool = false;
            localStorage.setItem("bool", bool);
        }else{
            bool = true;
            localStorage.setItem("bool", bool);
        }
    };
    if(bool){
        title.textContent = "Shaedul_Off's Site";
        localStorage.setItem("tt", title.textContent);
        loader.style.display = "flex";
        wrapper.style.display = "none";
        errors.style.display = 'none';
        ElKey[1].classList.remove("dsh");
        ElName[1].classList.remove("dsh");
        lon.textContent = ElName[1].value;
        localStorage.setItem("lon", lon.textContent);
        ElName[1].value = '';
        ElKey[1].value = "";
        setTimeout(() => {
            loader.style.display = "none";
            mySite.style.display = "flex";
        }, 4000);
        }else{
            errors.style.display = "flex";
            ElKey[1].classList.add('dsh');
            ElName[1].classList.add("dsh");
            ElKey[1].value = "";
        }
    }
});
form[2].addEventListener("click", (x) => {
    x.preventDefault();
    var obj = {};
    if(x.target.className == 'submit'){
        if (
            ElName[2].value == "" ||
            ElKey[2].value == ""
        ) {
            alert("Barchasini to'ldiring!");
            return;
        }
        if (x.target.className == "submit") {
            obj = { name: ElName[2].value, key: ElKey[2].value };
            ElName[2].value = "";
            ElKey[2].value = "";
            alert('You have successfully registered!')
        }
        BAZA.push(obj);
        localStorage.setItem("baza19018", JSON.stringify(BAZA));
    }
});
// ! FORM [0, 1, 2] end

// ! LOG UOT start
logOut.addEventListener("click", () => {
    mySite.style.display = "none";
    wrapper.style.display = 'flex';
    title.textContent = 'Log in';
    bool = false;
    localStorage.setItem('bool', bool);
});
// ! LOG UOT end

// ! LSB start
if(lsb){
    change.innerHTML = lsb;
        cont.style.display = "none";

    if(lsb == 'Sign up'){
        log.classList.add('w100');
        document.body.style.background = "var(--third)";
        change.style.background = "var(--first)";
    }else {
        sign.classList.add('w100');
        document.body.style.background = "var(--first)";
        change.style.background = "var(--third)";
    }
}
// ! LSB end

// ! TITLE start
if(tt){
    title.textContent = tt;
};
// ! TITLE end

// ! CHANGE start
change.addEventListener('click', () => {
    if (change.textContent == 'Sign up'){
        document.body.style.background = 'var(--third)';
        sign.classList.add(clas);
        log.classList.remove('wh', 't', 'sk', 'sc', 'rt', 'w100');
        change.innerHTML = 'Log <br> in';
        localStorage.setItem('chbtn', 'Log <br> in');
        change.style.background = 'var(--third)';
        title.textContent = 'Sign up';
        if(ElName[1].classList == 'dsh'){
            errors.style.display = "none";
        }
        }else{
            if (ElName[1].classList == "dsh") {
            setTimeout(() => {
                errors.style.display = "flex";
            }, 600);
        }
        document.body.style.background = "var(--first)";
        log.classList.add(clas);
        change.textContent = 'Sign up';
        change.style.background = "var(--first)";
        sign.classList.remove("wh", "t", "sk", "sc", "rt", "w100");
        cont.style.display = 'none';
        localStorage.setItem("chbtn", "Sign up");
        title.textContent = "Log in";
        localStorage.setItem("tt", title.textContent);
    }
});
// ! CHANGE end

// ! BAR start
bar.addEventListener('click', () => {
    radio.classList.toggle("l0");
    if (radio.classList == "radio radio_fix l0") {
        iconn.classList.remove('fa-bars');
        iconn.classList.add("fa-times");
        radio.style.left = 0;
    } else {
        iconn.classList.add("fa-bars");
        iconn.classList.remove("fa-times");
        radio.style.left = '-260px';
    }
});
// ! BAR end

// ! WRAP start
wrap.addEventListener('click', () => {
    if (radio.classList == "radio radio_fix l0") {
      radio.classList.remove("l0");
      iconn.classList.remove("fa-times");
      iconn.classList.add("fa-bars");
      radio.style.left = "-260px";
    }
});
// ! WRAP end
