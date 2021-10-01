import React, { useState } from 'react';
import { Appwrite } from 'appwrite'

function LoginUser(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");

    async function handleSubmit(event){
        event.preventDefault();

        const userData = {
            name,
            email,
            company,
            role
        };

        console.log(name);
        console.log(email);
        console.log(company);
        console.log(role);

        let appwrite = new Appwrite();
        const appwriteEndpoint = 'http://localhost/v1';
        const projectID = '6156050454d9e';
        const documentID = '6156b0c2ecf6f';

        appwrite
            .setEndpoint(appwriteEndpoint) // Your Appwrite Endpoint
            .setProject(projectID) // Your project ID

        await appwrite.account.createSession('theBeginner86@twitter.com', 'test@123').then(() => {
            
            let promise =  appwrite.database.createDocument(documentID, userData);

            promise.then((res) => {
                console.log(res); // Success
            }, function (err) {
                console.log(err); // Failure
            }); 
            // Success
        }, function (err) {
            console.log(err); // Failure
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} /><br/>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
            <input type="text" placeholder="Your Company" value={company} onChange={(e) => setCompany(e.target.value)} /><br/>
            <input type="text" placeholder="Your Role" value={role} onChange={(e) => setRole(e.target.value)} /><br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginUser;
