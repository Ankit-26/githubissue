import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';
import React from 'react';
import "./issue.css";
import Chips from './Widget/Chips';


const Issue = ({ issueElement }) => {
    return (
        < div className='issue'>
            <div className='issue-desc'>
                <div><SettingsInputSvideoIcon fontSize="medium" style={{ color: "rgb(94 193 103)" }} /></div>
                <div className='issue-para'>
                    <p>{issueElement.title}</p>
                    {issueElement?.labels?.map((label) => {
                        return <Chips name={label?.name} color={label?.color} key={label.id} />
                    })}
                </div>
            </div>
            <div className='issue-attribute'>

            </div>
        </div>
    )
}

export default Issue