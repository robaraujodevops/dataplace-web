import React from "react";
import Routes from "./routes";
import RootContext from "./contexts/root";
import MenuContext from "./contexts/menu";

const App = () => <RootContext>
                    <MenuContext>
                      <Routes />
                    </MenuContext>
                  </RootContext>

export default App;
