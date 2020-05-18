import React, {useContext} from "react";
import {AppContext} from "./App";

const LanguagePicker = () => {
    const { dispatch } = useContext(AppContext);
    let setLanguage = lang => () => dispatch({ type: "change-language", payload: lang });

    return (
        <div>
            <button onClick={setLanguage('en')}>English</button>
            <button onClick={setLanguage('fr')}>French</button>
        </div>
    );
}

export default LanguagePicker