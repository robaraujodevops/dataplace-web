import React from "react"
import Tables from "../../../partials/Tables"
import { useParams } from "react-router-dom"

export default props =>  {
    const { active } = props.block;
    const {id} = useParams();

    return (
        <div key="unidades" role="tabpanel" className={`tab-pane fade ${active ? "active in" : ""}`} id="tab_unidades" aria-labelledby="unidades-tab" >
            <Tables 
                comp={{
                    "scope": "Unidades",
                    "holder": "Nome do Prédio"
                }}
                src={`units?build_id=${id}`}
                colsTh={["ID","Unidade","Compl","Quartos","Locação","Valor Loc","Venda","Valor Venda","Status"]}
                cols={[
                    { data: "id"}, 
                    { data: "uh" },
                    { data: "comp" },
                    { data: "bedrooms" },
                    { data: "rent" },
                    { data: "rent_value" },
                    { data: "sale" },
                    { data: "sale_value" },
                    { data: "status" }
                ]}
                colDefs={[
                    {
                        "targets": 0,
                        "data": "id",
                        "render": function ( data ) {
                            return `<a href='${data}'><b>${data}</b></Link>`
                        }
                    },
                ]}
            />
        </div>
    )
}