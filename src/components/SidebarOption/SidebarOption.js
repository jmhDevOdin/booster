import React from 'react';
import './SidebarOption.css';
import { useHistory } from 'react-router-dom';
import db from '../../firebase';


function SidebarOption({ Icon, title, id, addZoneOption }) {
    const history = useHistory();

    const selectZone = () => {
        if (id) {
            history.push(`/zone/${id}`);
        } else {
            history.push(title);
        }
    };

    const addZone = () => {
        const zoneName = prompt('Please enter the zone name');

        if (zoneName) {
            db.collection('zones').add({
                name: zoneName,
            });
        }
    };

    return (
        <div className='sidebarOption' onClick={addZoneOption ? addZone : selectZone}>
            {Icon && <Icon className='sidebarOption__icon' />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                    <h3 className='sidebarOption__zone'>
                        <span className='sidebarOption__hash'>#</span> {title}
                    </h3>
                )}
        </div>
    );
}

export default SidebarOption