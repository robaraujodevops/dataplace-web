import React from "react"
import Tables from "../../../partials/Tables"

export default props =>  (
    <div key="unidades" role="tabpanel" className="tab-pane fade" id="tab_unidades" aria-labelledby="unidades-tab" >
        <Tables 
            comp={{
                "scope": "Unidades",
                "holder": "Nome do Prédio"
            }}
            src={`units?build_id=${props.build_id}`}
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