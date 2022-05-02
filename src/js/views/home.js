import React, { useState } from "react";
import "../../styles/home.css";



export const Home = () => {
	const [newUser, setNewUser] = useState("")

	const createUser = async () => {
		const response = await fetch("https://3000-thelgaris-flaskresthell-mn6bjxci1db.ws-eu43.gitpod.io/user", {
			method: 'POST',
			body: JSON.stringify({"name": newUser}),
			headers: {'content-type': 'application/json'},
		})
		const data = await response.json()
		console.log("@@@@@@@@@@@", data)
	}


	return(
	<div className="text-center mt-5">
		<input onChange={(e)=> {setNewUser(e.target.value)}}></input>
		<button onClick={()=>{createUser()}}>Create User</button>
	
	</div>)

}
