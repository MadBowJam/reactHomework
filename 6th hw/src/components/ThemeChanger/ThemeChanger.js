const ThemeChanger = (props) => {
    return(
        <div className="toggle_btn">
            <input type="checkbox" name="switch" id="switch" onChange={props.onChange}/>
            <label htmlFor="switch" className="switch">Switch theme</label> 
        </div>
    )
}

export default ThemeChanger;