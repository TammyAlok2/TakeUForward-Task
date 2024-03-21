import React from 'react'

const ApiCode = () => {


    const url = 'https://judge0-ce.p.rapidapi.com/about';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '02ec156ae9msh7854046a39656d4p16e0adjsn01e4427f2613',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      }
    };
    


 
const handleApi = async()=> {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
handleApi();

  return (
    <div>
      <h2>hello this is api </h2>
    </div>
  )
}

export default ApiCode
