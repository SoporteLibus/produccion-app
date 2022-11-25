export default function Select(prop) {
    return (
        <div className="form-group">
            <label>{prop.title}:</label>
            <select required>
                <option value="" >Elegir</option>
                {prop.children}
            </select>
        </div>
    )
}