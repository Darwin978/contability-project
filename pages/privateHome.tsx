import React, {ReactElement} from "react";
import {Footer} from "../components/footer";
import Menu from "../components/menu";

const privateHome = () =>{

    return(
        <>
            <header>
                <Menu></Menu>
            </header>
            <Footer></Footer>
        </>
    )
}

export default privateHome;