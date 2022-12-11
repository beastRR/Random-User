import React from "react";
import "./App.css";

const UserCard =({data})=>
{
    return(
        <div className="container-fluid cen">
            <div className="text-center card bg-success pb-5" style={{width:600}}>
                <div id="image"><img  src={data.picture?.large} width={150} height={160} alt="pic"/></div>
                <h1 className="text-warning">{` ${data.name?.first} ${data.name?.last} `}</h1>
                <h4 id="email"><span className="test" style={{fontSize:20}}>📩 &nbsp;</span>{data.email}</h4>
            </div>

        </div>
    )
}

export default UserCard;