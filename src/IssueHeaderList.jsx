import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';

function IssueHeaderList({ name }) {
    return (
        <li className='issue-arrow'>
            <div>{name}</div>
            <div>
                <ArrowDropDownIcon fontSize='medium' />
            </div>
        </li>
    )
}

export default IssueHeaderList