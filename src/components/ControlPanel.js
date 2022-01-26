import React from 'react';

function ControlPanel(props) {
    return   <div><label for="fname">Amount of images:</label><br/>
                    <input type="number"/><br/>
                    <label for="lname">Offset:</label><br/>
                    <input type="number" /><br/>
                    <input type="submit" value="Submit"/>
            </div>
}
export default ControlPanel;
