class product{
    constructor(id,name,lop,email,) {
        this.id=id;
        this.name=name;
        this.lop=lop;
        this.email=email;

    }
}
let plist=[
    new product(1,"ao",12,),
    new product(2,'quan',20000),
    new product(3,"sao",4000)

]

function pro() {
    let content = "";
    for (let i = 0; i < plist.length; i++) {
        content+=`<tr>
                 <td>${plist[i].id}</td>
                 <td>${plist[i].name}</td>
                 <td>${plist[i].lop}</td>
                 <td><button onclick="deleteItem(${plist[i].id}) ">delete</button></td>
                   <td><button onclick="editItem(${plist[i].id}) ">edit</button></td>

</tr>
       </tr>
`
    }
    document.getElementById("on").innerHTML=content;
    // let Price =getPSumrice();
    // document.getElementById('sum').innerHTML= `tong tien la${Price}`
}
pro()
// function  getPSumrice(){
//    let sum=0
//     for(let i=0;i<plist.length;i++){
//         sum+=plist[i].price
//
//     }
//     return sum

function create(){
    let id=+document.getElementById('id').value;
    let name= document.getElementById('name').value;
    let price= +document.getElementById("price").value;
    let newProduct= new product(id,name,price)
    plist.push(newProduct)
    pro()
}
function deleteItem(x){
    for(let i=0;i<plist.length;i++){
        if(plist[i].id===x){
            plist.splice(i,1)
        }
    }
    pro()
}
function editItem(x){
    for(let i=0;i<plist.length;i++){
        if(plist[i]===x){
            document.getElementById('id').value=plist[i].id;
              document.getElementById('name').value=plist[i].name;
              document.getElementById('price').value=plist[i].lop;

        }
    }
}

