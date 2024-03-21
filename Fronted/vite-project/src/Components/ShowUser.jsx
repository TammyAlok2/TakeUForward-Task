import React,{useState,useEffect} from 'react'

const ShowUser = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/showUser');
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
