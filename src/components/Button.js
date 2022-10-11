import {useState, useEffect} from "react";

function Button(props) {
    // const displayAddMovie = () => {
    //     <button>Add Movie</button>
    // }

    const [formData, setFormData] = useState({
        searchTerm: "",
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents page from refreshing on form submission
        props.listquotes(formData.searchTerm); // pass search term to listquotes prop, which is App's getListQuotes function
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {props.getThis === "Listquotes" ? <h3>Get a list of quotes</h3> : <h3>Get exchange</h3>}
                {props.getThis !== "Listquotes" ? <input type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm}/> : null}
                <input type="submit" value={props.getThis} />
            </form>
        </>
    )
}

export default Button;