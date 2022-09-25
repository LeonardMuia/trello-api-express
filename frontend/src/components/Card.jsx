import CardForm from "./CardForm"
import CardModal from "./CardModal"

export default() => {
    return (
        <>  
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <div className="card--top">
                            <h3 className="card--title">To do</h3>
                            <div className="card--btn">+ Add</div>
                        </div>
                        <div className="card--items">
                            { false && <form className="card--form">
                                <CardForm />
                            </form> }
                            <div className="card--content">
                                <span>Buy an oven</span>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>   

            <CardModal /> 
        </>
    )
}