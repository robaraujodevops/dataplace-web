import React, { useState, useEffect } from "react"
import api from "../../../services/api";
import { dateParser } from "../../../helpers"
import { useParams } from "react-router-dom";

export default props => {
    const {active} = props.block;
    const [activities, setActivies] = useState([])
    const {id} = useParams();

    useEffect(() => {
        api.get(`/recent-activities?build_id=${id}`).then((resp) => {
            setActivies(resp.data)
        })
    }, [id])

    return (
        <div key="atividades-recentes" role="tabpanel" className={`tab-pane fade ${active ? "active in" : ""}`} id="tab_atividadesrecentes" aria-labelledby="atividadesrecentes-tab">
            <ul className="messages scroll">
                {activities.map(({
                    avatar_img,
                    content,
                    id,
                    user_id,
                    last_name,
                    name,
                    updated_at,
                    username
                }) => {
                    const { day, month } = dateParser(updated_at, "recent-activities")

                    return (
                        <li key={id}>
                            <img src={`/images/admin/users/${user_id}.jpeg`} className="avatar" alt="Avatar" />
                            <div className="message_date">
                                <h3 className="date text-info">{day}</h3>
                                <p className="month">{month}</p>
                            </div>
                            <div className="message_wrapper">
                                <h4 className="heading">{name}</h4>
                                <blockquote className="message">{content}</blockquote>
                                <br />
                                <p className="url">
                                    <span className="fs1 text-info" aria-hidden="true" data-icon=""></span>
                                    <span><i className="fa fa-paperclip"></i> Ação do Usuário </span>
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}