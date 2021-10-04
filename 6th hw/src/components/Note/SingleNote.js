import { ThemeContext } from "../ThemeChanger/theme-context";
import { useContext } from "react";

function SingleNote(props) {
    const theme = useContext(ThemeContext);

    return(
        <div className="note_content">
            <p className="note_text" style={{ color: theme.txtColor }}>{props.text}</p>
            <div className="note_controls">
                <button className="btn edit" onClick={props.onEdit}>Edit</button>
                <button className="btn delete" onClick={props.onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default SingleNote;