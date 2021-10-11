import React, { useEffect } from 'react';

const Alert = ({ alert, removeAlert}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 3000)
        return () => clearTimeout(timeout)
    }, [alert])
    const { type, msg } = alert
    return <p className={`alert alert=${type}`}>{msg}</p>
}

export default Alert