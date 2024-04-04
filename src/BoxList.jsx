import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

/** Component for BoxList
 *
 * Props:
 * none
 *
 * State:
 * - boxes (array of objects representing boxes)
 *
 * App -> BoxList -> Box
 * App -> BoxList -> NewBoxForm
 */
function BoxList() {
    const [boxes, setBoxes] = useState([]);

    /** Updates boxes state component based on passed in properties */
    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }

    /** Renders a Box component for each box in the boxes state */
    function renderBoxes() {
        return (
            <div className="BoxList-boxes">
                {boxes.map(b =>
                    <Box
                    key={b.id}
                    height={b.height}
                    width={b.width}
                    backgroundColor={b.backgroundColor}
                    remove={() => removeBox(b.id)} />)}
            </div>
        );
    }

    /** Removes a Box component */
    function removeBox(id) {
        setBoxes(boxes.filter(b => b.id !== id));
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    )
}

export default BoxList;