import { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./components/UserCard/UserCard";
import Navbar from "./layouts/Navbar";

function App() {

  //state variables
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      //Local variable
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");
        //if the fetch request is okay, we want the json version of the response
        userData = await response.json();
        //catch errors
      } catch (error) {
        //Log errors
        console.log(error);
        //the userData is an empty array
        userData = [];
      }
      setAllUsers(userData.results);
      // set our state variable with the value that is stored in the userData
      setUsers(userData.results);
    })();
    //We only want to call setUsers once, so we will pass an empty array
  }, []);


  //Based on the country of the employee, we can assume that he is french
  const filteredFrenchUsers = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.location.country}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <>
    <Navbar />
    <div className="App">
      <center><h2> La liste des employés de l’entreprise ABC</h2></center>
      <center> <input className="search-box" onInput={filteredFrenchUsers} placeholder="Rechercher des employés français..."/></center>
      <div className="cards-container">
       {/* Local state "users" which has all the data in it */}
       {/* get each of the individual users */}
      {users.map((user, index) => (
        // We will pass in the actual user in userData prop
        // Specify a key using an index which stands for the position of the item in the array
        <UserCard userData={user} key={index} />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;