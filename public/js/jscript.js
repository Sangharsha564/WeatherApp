const searchButton=document.getElementById('searchBtn');
const dates=document.getElementById('date');

dates.innerText=new Date();
const showWeather=async(event)=>{
    event.preventDefault();
    const inputlocations=document.getElementById('inputlocation').value;
    const locationValue=document.getElementById('location');
    const weatherValues=document.getElementById('weatherValue');
    const weathericon=document.getElementById('icons');
    if(inputlocations===""){
        weatherValues.innerText="please enter the location"
    }
    else{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${inputlocations}&appid=8d755bb4aead0149ddc11bc528ae73e7`
            const response= await fetch(url);
            const objdata= await response.json();
            const arraydata=[objdata];
            locationValue.innerText=arraydata[0].name+'-'+arraydata[0].sys.country;
            const weathertemp=arraydata[0].main.temp;
            const weathersuitation=arraydata[0].weather[0].main;
            const actualtemp=(weathertemp-273.15).toFixed(2);
            weatherValues.innerText=actualtemp;
            if(weathersuitation==='Clouds'){               
                weathericon.innerHTML='<i class="fa-solid fa-cloud fa-shake fa-2xl" style="color: #d2def4;"></i>';
            }
            else if(weathersuitation==='Clear'){
                weathericon.innerHTML='<i class="fa-solid fa-sun fa-spin fa-2xl" style="color: #fff70f;"></i>';
            }
            else if(weathersuitation==='Rain'){ 
                weathericon.innerHTML='<i class="fa-solid fa-cloud-rain fa-bounce fa-2xl" style="color: #4c5057;"></i>';
            }
            else if(weathersuitation==='Haze'){ 
                weathericon.innerHTML='<i class="fa-solid fa-sun-plant-wilt fa-beat-fade fa-2xl" style="color: #f2eb31;"></i>';
            }
            else{
                weathericon.innerHTML='<i class="fa-solid fa-cloud-sun fa-flip fa-2xl" style="color: #a8bde1;"></i>';
            }


            
        } catch {
            weatherValues.innerText="please enter proper location"
        }
    }

    
}
searchButton.addEventListener('click',showWeather);