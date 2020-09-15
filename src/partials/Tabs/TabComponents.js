import React from "react";
import AtividadesRecentes from "./component-tabs/AtividadesRecentes";
import Galeria from "./component-tabs/Galeria";
import Unidades from "./component-tabs/Unidades";

const Components = {
    atividadesrecentes: AtividadesRecentes,
    galeria: Galeria,
    unidades: Unidades
 };

export default (block,build_id) => {

    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], {key: block.tag, build_id: build_id});
    }

    return React.createElement(
        () => <div>Error while creating element</div>
    );
};
  