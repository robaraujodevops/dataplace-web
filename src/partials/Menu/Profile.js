import React, { useContext } from "react";
import { MainContentContext } from "../Contexts";

export default function Profile() {
    const { user } = useContext(MainContentContext)
    console.log(user)
    return (
        <div className="profile clearfix">
            <div className="profile_pic">
                {user.id && <img src={`/images/admin/users/${user.id}.jpeg`} alt="..." className="img-circle profile_img" />}
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