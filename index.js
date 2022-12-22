
//     let local = localStorage

// const getItem = () => {
//     let inp =document.querySelector('input');

//     let data = {
//     name : inp.value
//     }

//     if(inp.value !== "" && !inp.value.includes(" ") ){
//         local.setItem("user-name", JSON.stringify(data))

//         let get_item = local.getItem("user-name")
    
//         get_item = JSON.parse(get_item)
//         //console.log(get_item);
//        //console.log(JSON.parse(local["user-name"]).name);
//     }
//     else{
//         alert("Iltimos bo`sh joyni to`ldiring")
//     }
// }
//     let heading = document.querySelector('h1');
//     heading.innerHTML = JSON.parse(local["user-name"]).name

//     const DeleteItem = () => {
//          local.removeItem("user-name")
//     }



    
    let local = localStorage
    let base = {
        name: "Samandar",
        password: "19920303"
        }
        
const getItem = () => {
    let inp1 =document.querySelector('.inp1');
    let inp2 =document.querySelector('.inp2');

    let data = {
    name : inp1.value,
    password : inp2.value
    }

    if(inp1.value !== "" && !inp1.value.includes(" ") && inp2.value !== "" && !inp2.value.includes(" ") ){
        local.setItem("user-name", JSON.stringify(data))

        let get_item = local.getItem("user-name")
    
        get_item = JSON.parse(get_item)
        //console.log(get_item);
       //console.log(JSON.parse(local["user-name"]).name);
    }
    else{
        alert("Iltimos bo`sh joyni to`ldiring")
    }
save()
    
}

const save = () => {
    if (JSON.parse(local["user-name"]).name == base.name && JSON.parse(local["user-name"]).password == base.password) {
        alert("Xush kelibsiz")
        let heading = document.querySelector('h1');
            heading.innerHTML = JSON.parse(local["user-name"]).name; 
            heading.innerHTML += JSON.parse(local["user-name"]).password
        }
        else{alert("Ism yoki parol noto`g`ri kiritilgan")}
}

    const DeleteItem = () => {
         local.removeItem("user-name")
    }