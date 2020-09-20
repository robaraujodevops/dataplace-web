import React from "react";
import AtividadesRecentes from "./component-tabs/AtividadesRecentes";
import Galeria from "./component-tabs/Galeria";
import Unidades from "./component-tabs/Unidades";

const Components = {
    atividadesrecentes: AtividadesRecentes,
    galeria: Galeria,
    unidades: Unidades
 };

export default (block) => {

    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], {key: block.component, block});
    }

    return React.createElement(
        () => <div>Error while creating element</div>
    );
};
  