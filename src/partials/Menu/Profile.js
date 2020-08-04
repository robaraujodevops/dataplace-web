import React, { useContext } from "react";
import { MainContentContext } from "../Contexts";

export default function Profile() {
    const { user } = useContext(MainContentContext)
    
    return (
        <div className="profile clearfix">
            <div className="profile_pic">
                {user.avatar_img && <img src={"/"+user.avatar_img} alt="..." className="img-circle profile_img" />}
            </div>
            <div className="profile_info">
                {user.name && 
                    <> 
                    <span>Olá,</span>
                    <h2>{user.name} {user.last_name}</h2>
                    </>
                }
            </div>
        </div>
    )
}