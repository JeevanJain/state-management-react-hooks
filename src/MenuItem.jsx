import React, {useContext} from "react";
import {AppContext} from "./App";

const MenuItem = () => {
    const { state } = useContext(AppContext);
    return (
        <div>
            <p>Theme colour: {state.color}</p>
            <p>Locale: {state.lang}</p>
        </div>
    );
}

export default MenuItem