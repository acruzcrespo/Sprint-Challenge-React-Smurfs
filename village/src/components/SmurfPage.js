import React from 'react';

function SmurfPage(props){
    const smurf = props.smurfs.find( smurf => `${smurf.id}` === props.match.params.id )
    if (!smurf) return <h3>loading data...</h3>;
    console.log(props, smurf)
    return (
        <div>
            <div className="character-info-wrapper">
                <h3>Name: {smurf.name}</h3>
                <h4>Age: ({smurf.age})</h4> 
                <h4>Height: ({smurf.height})</h4> 
            </div>
        </div>
    )
}

export default SmurfPage;