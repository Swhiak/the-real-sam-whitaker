import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [display, setDisplay] = useState(true);

    return (
        <div className='nav-body' style={styles.navBody(display)}>
            <div className='nav-header'>
                <div className='nav-bars' onClick={() => setDisplay(!display)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>
    )
}

const styles = {
    navBody: (d) => ({
        maxWidth: '16%',
        minWidth: '4%',
        width: d ? '16%' : '4%',
    })
}

export default Nav;