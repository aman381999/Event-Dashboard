import { Button, Card, Grid, Icon } from '@mui/material'
import { getFormattedDate } from '../../common/functions';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { truncateText } from '../../common/functions';

const EventCard = (props) => {
    const { eventData } = props;

    return (
        <>
            <Card
                key={eventData.id}
                className='dashboardLayout'
                sx={{
                    borderRadius: "12px"
                }}
            >
                <div className='eventCardTitle text-lg'>
                    {eventData.title}
                </div>

                <div className='eventCardDate'>
                    <div className='pr-2'>
                        <CalendarTodayOutlinedIcon />
                    </div>
                    <div className='text-base'>
                        {getFormattedDate(eventData.date)}
                    </div>
                </div>

                <div className='pb-6 text-sm'>
                    {truncateText(eventData.description)}
                </div>

                <div className='flex flex-col'>
                    <Button
                        variant='contained'
                        className='customButton'
                    >
                        View Details
                    </Button>
                </div>
            </Card>
        </>
    )
}

export default EventCard