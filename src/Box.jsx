import './Box.css';

/** Component for Box
 *
 * Props:
 * - backgroundColor
 * - width
 * - height
 *
 * State:
 * none
 *
 * BoxList -> Box
 */
function Box({ backgroundColor, width, height, remove }) {
    const boxStyles =
    {
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor
    };

    return (
        <div className="Box">
            <div className="Box-single" style={boxStyles}></div>
            <button
                className="Box-remove btn btn-danger"
                onClick={remove}>Remove</button>
        </div>
    );
}


export default Box;