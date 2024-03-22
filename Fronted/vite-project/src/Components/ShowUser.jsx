
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const ShowUser = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://takeuforward-task-mxjp.onrender.com/api/v1/showUser');
        const userData = await response.json();
        console.log(userData)
        if (userData.success) {
          setUsers(userData.data);
        } else {
          console.error('Error: ', userData.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (

    <div>
         <Link to='/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5 p-5 top-10">
Back
</Link>
         <div className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
    UserData 
 
</div>
<br/>
          <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-800">
        <thead>
          <tr>
            <th className="border border-gray-800 px-4 py-2">Username</th>
            <th className="border border-gray-800 px-4 py-2">Source Code</th>
            <th className="border border-gray-800 px-4 py-2">Input Code</th>
            <th className="border border-gray-800 px-4 py-2">Language</th>
            <th className="border border-gray-800 px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {users.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
              <td className="border border-gray-800 px-4 py-2">{row.userName}</td>
              <td className="border border-gray-800 px-4 py-2">
                <div className="overflow-x-auto">{row.sourceCode.substr(0,100)}</div>
              </td>
              <td className="border border-gray-800 px-4 py-2">{row.inputCode}</td>
              <td className="border border-gray-800 px-4 py-2">{row.codeLanguage}</td>
              <td className="border border-gray-800 px-4 py-2">{row.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ShowUser
