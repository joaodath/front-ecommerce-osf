import React, {useState} from 'react'
import { Dropdown} from 'react-bootstrap'
function ProductsMenu() {
    const [options, setOptions] = useState([1,3,5,6,7])
    return (
        <>  
            {options.map(i => (
                <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                    Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            ))}
        </>
    )
}

export default ProductsMenu
