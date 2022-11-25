export default function Input(prop) {
    return (
        <div className="form-group">
            <label>{prop.title}:</label>
            <div className="group">
                    <input id={prop.id} type="text" className="form-control" placeholder={prop.placeholder} required={prop.required} />
            </div>
        </div>
    )
}