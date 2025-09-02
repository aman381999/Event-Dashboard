import { Card } from '@mui/material'
import EventForm from './components/EventForm'

const CreateEvent = (props) => {
    const { eventData, setEventData } = props;
    return (
        <>
            <div
                className='px-[3%] flex flex-col items-center'
            >
                <div className='createHeaderContainer'>
                    <p className='pt-4 mb-2 createEventHeader1'>
                        Create New Event
                    </p>
                    <p className='pt-2 text-sm'>
                        Fill in the details to create your event
                    </p>
                </div>

                <Card
                    sx={{
                        mt: 2,
                        borderRadius: "10px",
                    }}
                    className='createHeaderCard'
                >
                    <EventForm
                        eventData={eventData}
                        setEventData={setEventData}
                    />
                </Card>
            </div>
        </>

    )
}

export default CreateEvent