import { useState, useContext } from "react";
import SingleNote from "./SingleNote";
import NoteNew from "./NoteNew";
import { ThemeContext } from "../ThemeChanger/theme-context";

function Note(props) {
    const [ noteText, setText ] = useState(props.text);
    const [ isInput, toggleInput ] = useState(false);
    const theme = useContext(ThemeContext);

    function inputHandler() {
        toggleInput(!isInput);
    }

    function acceptChange(event) {
        event.preventDefault();
        props.onEdit(noteText);
        inputHandler();
    }

    function discardChange(event) {
        event.preventDefault();
        setText(props.text);
        inputHandler();
    }

    function changeValue(event) {
        setText(event.target.value);
    }

    return (
        <div className="note" style={{background: theme.background, border:theme.borderColor}}>
            {isInput ? 
                <NoteNew onSubmit={acceptChange} onDiscard={discardChange} onChange={changeValue} value={noteText}/> : 
                <SingleNote text={props.text} onEdit={inputHandler} onDelete={props.onDelete}/> }
        </div>
    )
}

export default Note;