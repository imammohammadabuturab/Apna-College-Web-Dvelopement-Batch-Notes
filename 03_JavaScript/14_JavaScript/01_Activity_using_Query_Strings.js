let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    console.log("button was clicked");
    let country = document.querySelector("input").value;
    console.log(country);
    let collegesArr = await getColleges(country);
    show(collegesArr);
});

function show(collegesArr) {
    let list  = document.querySelector("#list");
    list.innerText = "";
    for(col of collegesArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
};


async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        console.log(res);
        return res.data;
    } catch (e) {
        console.log("error : ", e);
        return [];
    }
}