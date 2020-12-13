import React from "react";
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperButton from "../../common/SuperButton/SuperButton";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";
import Title from "../../common/Title/Title";
import AuthContainer from "../../common/AuthContainer/AuthContainer";

const Test: React.FC = () => {
    return (
        <div>
            <SuperInputText placeholder="test"/>
            <hr/>
            <SuperButton>test</SuperButton>
            <hr/>
            <SuperCheckbox>test</SuperCheckbox>
            <hr/>
            <Title value="Title"/>
            <hr/>
            <AuthContainer>auth container(login, registration, refresh password)</AuthContainer>
        </div>
    )
}

export default Test;