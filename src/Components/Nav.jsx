import React, {useState} from 'react';

const Nav = () => {
    const [display, setDisplay] = useState(true);

    return (
        <div className='nav-pane'>
            <div onClick={() => setDisplay(!display)}>
                {display ? '<' : '>'}
            </div>
        </div>
    )
}

export default Nav;