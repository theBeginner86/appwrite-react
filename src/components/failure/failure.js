import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useHistory } from 'react-router-dom';
import './styles.css'

function Failure(){

    const history = useHistory();

    function handleSubmit(){
        history.push('/');
    }

    return (
        <div className="f-jumbotron">
            <div className="container" Style={"padding-top:5rem;"}>

            <h1 className="display-4">FAILURE</h1>
            <p className="lead">Uh! Something went wrong please try again or contact the developer.</p>

            <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-warning">Go Back</button>
            </form>
            
            </div>
        </div>
    );
}

export default Failure;
