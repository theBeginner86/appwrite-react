import React, { useState } from 'react';
import { Appwrite } from 'appwrite';
import { useHistory } from 'react-router-dom';
import './styles.css';
import image from '../images/newsletter.png';
import Footer from '../footer/footer';

function InputForm(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");

    const history = useHistory();

    async function handleSubmit(event){
        event.preventDefault();

        const userData = {
            name,
            email,
            company,
            role
        };

        let appwrite = new Appwrite();
        const server = {
            appwriteEndpoint: process.env.REACT_APP_ENDPOINT,
            projectID: process.env.REACT_APP_PROJECT_ID,
            documentID: process.env.REACT_APP_COLLECTION_ID,
            email: process.env.REACT_APP_USER_CREDENTIALS_EMAIL,
            password: process.env.REACT_APP_USER_CREDENTIALS_PASSWORD
        }

        appwrite
            .setEndpoint(server.appwriteEndpoint)
            .setProject(server.projectID)

        await appwrite.account.createSession(server.email, server.password).then(() => {
            
            let promise =  appwrite.database.createDocument(server.documentID, userData);

            promise.then((res) => {
                history.push('/success');
                console.log(res);
            }, function (err) {
                history.push('/failure');
                console.log(err);
            }); 
        }, function (err) {
            history.push('/failure');
            console.log(err);
        });
    }

    return (
        <div className="content">
            <div className="input-form">

                <div className="main main-raised">

                    <div>
                        <div Style={"margin:auto; width:fit-content"}>
                            <img className="mb-4 newsletter-logo" src={image} alt="" width="100" height="100" />
                        </div>

                        <h1 className="h3 mb-3 fw-normal">Newsletter SignUp</h1>

                        <form onSubmit={handleSubmit}>
                            <div Style={"margin:auto; width:fit-content"}>
                                <input type="text" className="form-control top" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} /><br/>
                                <input type="email" className="form-control middle" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                                <input type="text" className="form-control middle" placeholder="Your Company" value={company} onChange={(e) => setCompany(e.target.value)} /><br/>
                                <input type="text" className="form-control bottom" placeholder="Your Role" value={role} onChange={(e) => setRole(e.target.value)} /><br/>
                            </div>
                            <div Style={"margin:auto; width:fit-content"}>
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default InputForm;
