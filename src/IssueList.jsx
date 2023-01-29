import CheckIcon from '@material-ui/icons/Check';
import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Issue from './Issue';
import IssueHeaderList from './IssueHeaderList';
import "./issueList.css";

function IssueList() {
    const [more, setMore] = useState(true);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [issueList, setIssueList] = useState([]);
    const [visibleIssueList, setVisibleIssueList] = useState([]);
    const observer = useRef(null)
    const ContainerElement = useRef(null)
    const targetRef = useCallback((node) => {
        if (observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((entries) => {
            const element = entries[0];
            if (element.isIntersecting && more) {
                setPage((prevPage) => {

                    return prevPage + 1
                })
            } else if (more == false) {
                observer.current.disconnect(node)
            }
        }, { threshold: 1, root: ContainerElement.current })
        node && observer.current.observe(node)
    }, [more])

    useEffect(() => {
        if (page > 1) {
            setLoading(true)
            const newArray = [...visibleIssueList, ...issueList.slice(visibleIssueList.length, visibleIssueList.length + 5)]
            setVisibleIssueList(newArray)
            setTimeout(() => { setLoading(false), 2000 })
            if (newArray.length == issueList.length) {
                setMore(false)
            }
        }
    }, [page])


    useEffect(() => {
        async function getIssuesList() {
            const lisData = await axios.get("https://api.github.com/repos/facebook/react/issues");
            if (lisData?.data?.length > 0) {
                setVisibleIssueList(lisData?.data.slice(0, 5))
                setIssueList(lisData?.data)
            }
        }
        getIssuesList();
    }, [])


    return (
        <div className='issue-container'>
            <div className='issue-header'>
                <div className='issue-header-left'>
                    <li className='item1'>
                        <div><SettingsInputSvideoIcon fontSize="medium" /></div>
                        <div>625</div>
                        <div>Open</div>
                    </li>
                    <li className='item2'>
                        <div><CheckIcon fontSize="medium" /></div>
                        <div>1212</div>
                        <div>Closed</div>
                    </li>

                </div>
                <div className='issue-header-right'>
                    {["Author", "Label", "Projects", "Milestones", "Assignee", "Sort"].map((name, index) => {
                        return <IssueHeaderList name={name} key={index} />
                    })}
                </div>
            </div>
            <div className='issue-body' ref={ContainerElement}>
                {visibleIssueList.map((issue, index) => {
                    if (index == visibleIssueList.length - 1) {
                        return <div ref={targetRef}> <Issue issueElement={issue} key={issue.id} /></div>
                    }
                    return <Issue issueElement={issue} key={issue.id} />
                })}
            </div>
        </div>
    )
}

export default IssueList