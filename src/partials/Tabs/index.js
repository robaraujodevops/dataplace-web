import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";

export default function Tabs(props) {
    const {src = []} = props;
    console.log(src)
    const Tabs = (props) => {
        const handleClick = (e) => {
            e.preventDefault()
            console.log("teeste")
        }

        return (
            <li role="presentation" 
                className="">
                <a href="#tab_content1" 
                   id="home-tab"
                   role="tab"
                   data-toggle="tab"
                   aria-expanded="true"
                   onClick={handleClick}>
                    {props.tabName}
                </a>
            </li>
        )
    }

    const TabPanel = (props) => {
        const {comp = ""} = props;
        console.log(comp)
        const Tab = comp;

        return (
            <div role="tabpanel"
                 className="tab-pane fade"
                 id="tab_content1"
                 aria-labelledby="home-tab">
                 <Tab />
            </div>
        )
    }

    const Panela = () => {
        return (
            <ul className="messages">
                <li>
                    <img src="images/img.jpg" className="avatar" alt="Avatar" />
                    <div className="message_date">
                        <h3 className="date text-info">24</h3>
                        <p className="month">May</p>
                    </div>
                    <div className="message_wrapper">
                        <h4 className="heading">Desmond Davison</h4>
                        <blockquote className="message">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth.</blockquote>
                        <br />
                        <p className="url">
                            <span className="fs1 text-info" aria-hidden="true" data-icon=""></span>
                        </p>
                    </div>
                </li>
            </ul>
        )
    }

    const Panelb = () => {
        
        return (
        
            <table className="data table table-striped no-margin">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Client Company</th>
                        <th className="hidden-phone">Hours Spent</th>
                        <th>Contribution</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>New Company Takeover Review</td>
                        <td>Deveint Inc</td>
                        <td className="hidden-phone">18</td>
                        <td className="vertical-align-mid">
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" data-transitiongoal="35"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <div className="" role="tabpanel" data-example-id="togglable-tabs">
            <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                {src.map((i) => {
                    return <Tabs tabName={i.tag}/>
                })}
            </ul>
            <div id="myTabContent" className="tab-content">
                {src.map((i) => {
                    return <TabPanel comp={i.comp}/>
                })}
            </div>
        </div>
    )
}