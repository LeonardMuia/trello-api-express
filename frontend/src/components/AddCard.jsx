export default(props) => {

    const hideForm = function (event, id) {
        const form = document.getElementById(`${id}`); 
        if(form) {
            form.style.display = "none";
        }
    }

    return (
        <>
            <textarea id="" cols="30" rows="2" placeholder={`Enter a title for this card...`} autoFocus></textarea>
            <div className="form--actions">
                <div className="card--btn">Add card</div>
                <img src="/icons/x.svg" className="close-img-btn" onClick={event => hideForm(event, props.idList)} />
            </div>
        </>
    )
}