import React, {ReactElement} from "react";
import Menu from "../components/menu";
import {Footer} from "../components/footer";

const biblioteca = ():ReactElement  =>{

    return (<>
        <header>
            <Menu></Menu>
        </header>

        <Footer></Footer>
    </>)
}