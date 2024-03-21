import React  ,  {useState} from "react";
import toast ,{Toaster} from 'react-hot-toast'
const InputCode = () => {
  const [formData, setFormData] = useState({
    userName:" ",
    sourceCode:"",
    inputCode:" ",
    codeLanguage:"C++",
    time:'00',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/v1/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        toast.success("Data submitted Successfully ");
        // Optionally, reset the form fields after successful submission
        setFormData({
          userName:" ",
          sourceCode:" ",
          inputCode:" ",
          codeLanguage:" ",
          time:''
        
        });
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



  return (
    <>
      <div className="bg-white h-svh ">
    
  <div className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
    Compiler
 
</div>
<div className="align-center text-end"> Username:<input type='text'  placeholder="Enter your username" name="userName" value={formData.userName} onChange={handleInputChange} className="border-solid border-2 border-indigo-600" /></div>
        <div className="flex justify-around">
          <div className=" m-2"> 
          <h3>Input Values :</h3>
          <textarea
            className="border bg-emerald-300 h-1/4 m-10 p-10 top-3/4 w-100 text-black border-black "
            name="inputCode"
            rows={30}
            cols={30}
            value={formData.inputCode}
            onChange={handleInputChange}
            placeholder="Enter your input here"
            
        
            required
            />
            {" "}
          </div>
          
          
          <div className="flex-row m-5 p-5 items-center  h-svh w-full">
            <select className="border-black" value={formData.codeLanguage} onChange={handleInputChange} name="codeLanguage" defaultValue={'C++'}>
              <option >C++</option>
              <option>Java</option>
              <option>Javascript</option>
              <option>Python</option>
            </select>
            <textarea className="border bg-red-200 w-full flex-1 h-3/4" onChange={handleInputChange} name="sourceCode"
          value={formData.sourceCode} placeholder="Enter your code here" required></textarea>
            <div className="flex justify-evenly">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
Run
</button>

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full" onClick={handleSubmit}>
  Submit
</button>
<Toaster/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default InputCode;









































