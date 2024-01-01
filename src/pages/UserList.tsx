// import { useEffect, useState } from 'react';
// import useAxiosPrivate from '../hooks/useAxiosPrivate';
// import { useNavigate, useLocation } from 'react-router-dom';
// interface userList {}
// const UserList = () => {
//   const [users, setUsers] = useState<Array>([]);
//   const axiosPrivate = useAxiosPrivate();
//   const navigate = useNavigate();
//   const location = useLocation();
//   useEffect(() => {
//     async function getUserList() {
//       try {
//         const response = await axiosPrivate.get('/users');
//         console.log(response.data.users);
//         setUsers(response.data.users);
//         // if (response.data.error == 'Forbidden token expired') {
//         //   navigate('/login', { state: { from: location }, replace: true });
//         // }
//       } catch (err) {
//         console.log(err);
//         navigate('/login', { state: { from: location }, replace: true }); //navigating to this same page
//         // if user needs to be logged again
//       }
//     }
//     getUserList();
//     //eslint-disable-next-line
//   }, []);
//   return (
//     <div>
//       {users.map((user) => {
//         return (
//           <ul>
//             <li>{user.userName}</li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// };

// export default UserList;
