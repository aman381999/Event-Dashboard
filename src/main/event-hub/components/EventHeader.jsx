import { Button } from '@mui/material'
import SwipeableTemporaryDrawer from './EventHeaderDrawer';

const EventHeader = (props) => {
    const {
        activeBtn, 
        setActiveBtn
    } = props;

    return (
        <div className='eventHeader'>
            <p className='pl-2 text-lg font-bold'>EventHub</p>
            <div className='headerButtonContainer'>
                <Button
                    className={`headerButton ${activeBtn === "dashboard" ? "active" : ""}`}
                    onClick={() => setActiveBtn("dashboard")}
                >
                    Dashboard
                </Button>
                <Button
                    className={`headerButton ${activeBtn === "create" ? "active" : ""}`}
                    onClick={() => setActiveBtn("create")}
                >
                    Create Event
                </Button>
            </div>

            <SwipeableTemporaryDrawer setActiveBtn={setActiveBtn} />
        </div>
    )
}

export default EventHeader