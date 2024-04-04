import { useState } from 'react';
import './NewBoxForm.css';

/** Form for adding a box
 *
 * Props:
 * - addBox (function for adding a box)
 *
 * State:
 * - formData
 *
 * BoxList -> NewBoxForm
 */
function NewBoxForm({ addBox }) {
    const initialState =
    {
        height: 0,
        width: 0,
        backgroundColor: "",
    };

    const [formData, setFormData] = useState(initialState);

    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(d => ({
            ...d,
            [name]: value,
        }));
    }

    return (
            <form className="NewBoxForm" onSubmit={handleSubmit}>
                <label htmlFor="height">Height: </label>
                <input
                    id="height"
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange} />
                <br />
                <label htmlFor="width">Width: </label>
                <input
                    id="width"
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleChange} />
                <br />
                <label htmlFor="backgroundColor">Background Color: </label>
                <input
                    id="backgroundColor"
                    type="text"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange} />
                <br />
                <button type='submit' className='btn btn-success'>Add Box!</button>
            </form>
    );
}

export default NewBoxForm;