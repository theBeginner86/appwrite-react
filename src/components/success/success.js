import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css'

function Success(){

    const history = useHistory();

    function handleSubmit(){
        history.push('/');
    }

    return (
        <div className="s-umbotron">
            <div className="container" Style={"padding-top:5rem;"}>

                <h1 className="display-4">SUCCESS</h1>
                <p className="lead">Thanks for signing up. Have a good day!!.</p>

                <form onSubmit={handleSubmit}>
                    <button type="submit" className="btn btn-warning">Go Back</button>
                </form>
            
            </div>
      </div>
    );
}

export default Success;
