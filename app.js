const form = document.querySelector('#form');
const input = document.querySelector('input')
const div = document.querySelector('.div-centr');



div.style.display = 'none'

form.addEventListener('submit' , function(e){
    e.preventDefault(); 
    axios.get(`https://api.weatherapi.com/v1/current.json?key=27c33b52b37744b28d1164726231710&q=${input.value}`)
    .then((res)=>{
        const data = res.data
        console.log(data);
        div.style.display = 'block'

        div.innerHTML = `<div class = "flex-div"><div class="main-div-2">
        <div class="main-div d-flex justify-content-between">
            <div>
            <h1 class="animate__animated animate__bounce">hello World</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <h1 class="mt-5  animate__animated animate__pulse">30</h1>
            </div>
            <img class="animate__animated animate__fadeInDown" src="https://cdn.weatherapi.com/weather/64x64/day/116.png" width="100px" height="100px" alt="">
        </div>
        <div class="main-div mt-4">
            <h5 class="fs-6 mb-5">Air Conditions</h5>
            <div class="d-flex justify-content-between">
    
            <div class="new-flex">
                <h5><i class="fa-solid fa-temperature-three-quarters fa-shake"></i>&nbsp; Real Feel</h5>
                <h1 class="condition animate__animated animate__fadeInLeft">30</h1>
                <br><br>
                <h5><i class="fa-solid fa-droplet fa-bounce"></i>&nbsp; Humidity</h5>
                <h1 class="condition animate__animated animate__fadeInLeft">30</h1>
            </div>
            <div class="new-flex">
                <h5><i class="fa-solid fa-wind fa-fade"></i>&nbsp; Wind</h5>
                <h1 class="condition animate__animated animate__fadeInRight">30</h1>
                <br><br>
                <h5><i class="fa-solid fa-sun fa-spin"></i>&nbsp; UV Index</h5>
                <h1 class="condition animate__animated animate__fadeInRight">30</h1>
            </div>
            </div>
        </div>
    </div></div>`
        input.value = ""  
    }).catch((err)=>{
        console.log("error=>" , err);
        alert("Please Enter Correct Name")
    })
})