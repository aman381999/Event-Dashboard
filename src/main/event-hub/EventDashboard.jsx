import EventCard from './components/EventCard'
import { Box } from '@mui/material'

const EventDashboard = (props) => {
    
    const {eventData} = props;

    return (
        <>
            <div className='pl-[3%] pt-4'>
                <p style={{fontSize: "22px", fontWeight: "bold", marginBottom: "5px"}}>Event Dashboard</p>
                <p className='mt-2 mb-8 text-sm'>Manage and view all your events</p>
            </div>
            <Box
                className="eventContainer"
            >
                {eventData.map((item) => (
                    <EventCard eventData={item} />
                ))}
            </Box>
        </>
    )
}

export default EventDashboard