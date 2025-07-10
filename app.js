/*Promise chaining*/
// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         return res.json(); /*parse the data*/
//     })
//     .then((data1) =>{
//         console.log("data1 =",data1.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2 =",data2.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR :", err);
//     });





let btn=document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click", async () =>{
    // let fact= await getFacts();
    // let p=document.querySelector("#result");
    // p.innerText=fact;
    let link= await getImage();
    console.log(link);
    let img=document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link);
});

async function getImage(){

    try{
        let res= await axios.get(url2);
        return res.data.message;
    }catch(e){
        console.log("error : ",e)
        return "no image found";
    }
    
}

// btn.addEventListener("click", async () =>{
//     let fact= await getFacts();
//     // console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText=fact;
// })

// let url="https://catfact.ninja/fact";

// async function getFacts(){

//     try{
//         let res= await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log("error : ",e)
//         return "no fact found";
//     }
    
// }

// async function getFacts(){

//     try{
//         let res= await fetch (url);
//         let data=await res.json();
//         console.log(data.fact);

//         let res2= await fetch (url);
//         let data2=await res2.json();
//         console.log(data2.fact);
//     }
//     catch(e){
//         console.log("error : ",e)
//     }
    
// }

// Sending Headers with axios 

// const url="https://icanhazdadjokes.com/";

// async function getjokes(){
//     try{
//         const config = {headers: {Accept:"application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     }catch(err){
//         console.log(err);
//     }
// }