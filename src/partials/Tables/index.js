import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import $ from "jquery"
import "datatables.net"
import { getToken } from "../../services/auth"
import { Helmet } from "react-helmet"
import "./style.scss"

Tables.propTypes = {
    comp: PropTypes.object.isRequired, 
    src: PropTypes.string.isRequired,
    cols: PropTypes.array.isRequired,
    colDefs: PropTypes.array.isRequired,
    colsTh: PropTypes.array.isRequired
}

export default function Tables({comp,src,cols,colDefs,colsTh}) {
    const [tableSrc, setTableSrc] = useState(src)
    if (tableSrc != src) setTableSrc(src)

    useEffect(() => {
        $("#datatable").DataTable().destroy()
        $("#datatable").DataTable({
            "autoWidth": false,
            "language": {
                "processing": "<div class='lds-default'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>",
                "search": "Buscar",
                "lengthMenu": `Exibindo _MENU_ ${comp.scope}`,
                "paginate": {
                    "previous": "Anterior",
                    "next": "Próxima"
                },
                "info": `Exibindo de _START_ até _END_  ${comp.scope} de _TOTAL_`,
                "searchPlaceholder": `${comp.holder}`

            },
            "processing": true, 
            "serverSide": true, 
            "dataSrc": "teste",
            "ajax": {
                "url":`http://127.0.0.1:3333/${tableSrc}`,
                "beforeSend": function (request) {
                    
                    let header = document.querySelectorAll("select[name='datatable_length'], input[aria-controls='datatable'")
                    header.forEach((i) => {
                        i.classList.add("form-control","input-sm")
                    })
                    
                    request.setRequestHeader("Authorization", `Bearer ${getToken()}`)
                }
            },
            "columns": cols,
            "columnDefs": colDefs
        })
    }, [tableSrc])

    return (
        <>
            <Helmet>
                <link href="/vendors/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet" />
                <link href="/vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css" rel="stylesheet" />
                <link href="/vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css" rel="stylesheet" />
                <link href="/vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css" rel="stylesheet" />
                <link href="/vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css" rel="stylesheet" />
            </Helmet>
            <table id="datatable" className="table table-striped table-bordered">
                <thead>
                    <tr>
                        {colsTh && 
                            colsTh.map((item, i) => <th key={i}>{item}</th>)}
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>
    )
}