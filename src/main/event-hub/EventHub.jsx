import React from 'react'
import EventDashboard from './EventDashboard'
import CreateEvent from './CreateEvent'
import EventHeader from './components/EventHeader'
import "./eventHub.css";
import { useState } from 'react';

const EventHub = () => {
    const [activeBtn, setActiveBtn] = useState("dashboard");
    const [eventData, setEventData] = useState([
        {
            "id": 1,
            "title": "React Meetup 2025",
            "date": "2025-09-15",
            "description": "Join us for a React meetup where developers come together to discuss new trends, share ideas, and network."
        },
        {
            "id": 2,
            "title": "Frontend Conference",
            "date": "2025-10-01",
            "description": "A full-day conference covering modern frontend frameworks, design systems, and performance optimization techniques."
        },
        {
            "id": 3,
            "title": "UI/UX Workshop",
            "date": "2025-11-20",
            "description": "An interactive workshop on creating delightful user experiences, covering design thinking, prototyping, and usability testing."
        }]);

    return (
        <>
            <EventHeader
                activeBtn={activeBtn}
                setActiveBtn={setActiveBtn}
            />
            {
                activeBtn && activeBtn == "create" ?
                    <CreateEvent
                        eventData={eventData}
                        setEventData={setEventData}
                    /> :

                    <EventDashboard
                        eventData={eventData}
                    />
            }
        </>
    )
}

export default EventHub