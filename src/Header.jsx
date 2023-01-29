import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import CodeIcon from '@material-ui/icons/Code';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import React, { useState } from 'react';
import "./header.css";
import { isMobile } from './utils';

function Header() {
    const [tab, setTab] = useState(2);
    return (
        <div className='header'>
            <div className='header-upper'>
                <div className='header-left'>
                    <span >
                        <BookOutlinedIcon fontSize="medium" />
                    </span>
                    <div className='text-left'>
                        <span className='text'>
                            facebook
                        </span>
                        <span>/</span>
                        <span className='text'>
                            react
                        </span>
                    </div>
                    <div className='public'>
                        Public
                    </div>
                </div>
                <div className='header-right'>
                    {!isMobile ? <><li className='notification'>
                        <span><NotificationsNoneOutlinedIcon fontSize="medium" /></span>
                        <span>Notifications</span>
                    </li>
                        <li className='stared'>
                            <div className='stared-left'>
                                <span>
                                    <StarBorderOutlinedIcon fontSize="medium" />
                                </span>
                                <span>Star</span>
                            </div>
                            <div>175K</div>
                        </li>
                        <li className='fork'>
                            <div className='fork-left'>
                                <span>
                                    <StarBorderOutlinedIcon fontSize="medium" />
                                </span>
                                <span>Fork</span>
                            </div>
                            <div>35.5K</div>
                        </li></> : <div>
                        <span><NotificationsNoneOutlinedIcon fontSize="medium" /></span>
                        <span>
                            <StarBorderOutlinedIcon fontSize="medium" />
                        </span>
                        <span>
                            <StarBorderOutlinedIcon fontSize="medium" />
                        </span>
                    </div>}
                </div>
            </div>
            <div className='header-bottom' onClick={(e) => {
                setTab(e.target.parentElement.id ? e.target.parentElement.id : 2)
            }}>
                <div className={'tab' + (tab == 1 ? ' active' : "")} id="1">
                    <span><CodeIcon fontSize="medium" /></span>
                    <span>Code</span>
                </div>
                <div className={'tab' + (tab == 2 ? ' active' : "")} id="2">
                    <div><SettingsInputSvideoIcon fontSize="medium" /></div>
                    <div>Issues</div>
                    <div>625</div>
                </div>

            </div>
        </div >
    )
}

export default Header