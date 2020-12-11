import React from "react";
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperButton from "../../common/SuperButton/SuperButton";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";

const Test: React.FC = () => {
    return (
        <div>
            <SuperInputText placeholder="test"/>
            <SuperButton>test</SuperButton>
            <SuperCheckbox>test</SuperCheckbox>
        </div>
    )
}

export default Test;