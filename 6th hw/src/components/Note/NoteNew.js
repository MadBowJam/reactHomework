function NoteNew(props) {

    return(
        <form onSubmit={props.onSubmit} onReset={props.onDiscard} className="note__new">
            <textarea onChange={props.onChange} className="note_input" value={props.value}></textarea>
            <div className="input_btns">
                <button type="submit" className="btn new">Add</button>
                <button type="reset" className="btn delete">Cancel</button>
            </div>
        </form>
    )
}

export default NoteNew;