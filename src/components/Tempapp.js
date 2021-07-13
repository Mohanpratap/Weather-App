import React, { useEffect, useState } from 'react';
import './css/style.css';


const Tempapp = () => {
    const [city, setCity] = useState('null');
    const [search, setSearch] = useState('indor');

    

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3e0a142a1b4c725d443144006c196d12`;
            const response = await fetch(url);
            // const resJson = await response.json();
            const resJson = await (response.json());
           
            setCity(resJson.main);
        
            
        
                        
            

        }
        fetchApi();
    },[search])

    
    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    < input type='search' value={search} className='inputFeild' onChange={(event) => { setSearch(event.target.value) }} />
                    
                </div>
                

                {!city ? (<p className='errorMsg'>no data found</p>) : (<div>
                     <div id="weathercon"><i className="fas fa-sun"></i></div>

                    <div className='info'>

                        <h2 className='location'><i className='fas fa-street-view'></i>{search}</h2>

                        <h1 className='temp'> {city.temp}°C</h1>
                        <h3 className='tempmin_max'> Min : {city.temp_min} | Max : {city.temp_max}</h3>

                    </div>
                    
                    <div className='wave -one'></div>
                    <div className='wave -two'></div>
                    <div className='wave -three'></div>

                </div>)}



            </div>
        </>
    )
}

export default Tempapp;