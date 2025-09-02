import { Button, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import _ from 'lodash';
import moment from 'moment';
import { useState } from 'react';
import SnackbarComp from '../../common/components/SnackbarComp';
import { formatDate } from '../../common/functions';

const defaultValues = {
    title: '',
    date: null,
    description: '',
};

const EventForm = (props) => {

    const { eventData, setEventData } = props;

    const [status, setStatus] = useState(false);
    const [severity, setSeverity] = useState('');
    const [message, setMessage] = useState('');

    const schema = yup.object().shape({
        title: yup
            .string()
            .min(3, "You must enter minimum 3 characters")
            .required("You must enter a title"),

        date: yup
            .date()
            .typeError("You must enter a valid date")
            .required("You must enter a date"),

        description: yup
            .string()
            .min(20, "You must enter minimum 20 characters")
            .required("You must enter a description"),
    });

    const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(schema),
    });

    let descVal = watch("description");

    const { isValid, dirtyFields, errors } = formState;

    const onSubmit = (data) => {

        let formatDateVal = formatDate(data.date);

        const newData = {
            ...data,
            id: eventData.length + 1,
            date: formatDateVal
            
        }

        console.log("data", newData);

        setEventData((prev) => [...prev, newData]);
        setSeverity('success');
        setStatus(true);
        setMessage("Event created successfully!")
        reset();
    }

    return (
        <>
            <SnackbarComp
                open={status}
                severity={severity}
                onClose={() => setStatus(false)}
                msg={message}
            />
            <form
                className='p-6'
                onSubmit={handleSubmit(onSubmit)}
            >
                <p className='mt-0 mb-6 font-semibold'>Event Information</p>

                <div className='mb-4'>
                    <p className='mt-0 font-semibold'>
                        Event Title *
                    </p>
                    <Controller
                        control={control}
                        name="title"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                placeholder="Enter event title"
                                id="title"
                                error={!!errors.title}
                                helperText={errors?.title?.message}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#f0f0f5",
                                        borderRadius: "12px",
                                        height: "45px",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "8.5px 14px",
                                        color: "black",
                                    },
                                }}
                                fullWidth
                                required
                            />
                        )}
                    />

                </div>

                <div className='mb-4'>
                    <p className='mt-0 font-semibold'>
                        Event Date *
                    </p>
                    <Controller
                        control={control}
                        name="date"
                        render={({ field }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    {...field}
                                    label="dd/mm/yyyy"
                                    format="DD/MM/YYYY"
                                    disablePast
                                    onChange={(date) => field.onChange(date)}
                                    value={field.value}
                                    slotProps={{
                                        textField: {
                                            error: !!errors.date,
                                            helperText: errors?.date?.message,
                                            fullWidth: true,
                                            sx: {
                                                width: "100%",
                                                height: "45px",
                                                backgroundColor: "#f0f0f5",
                                                borderRadius: "12px",

                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "12px",
                                                    "& fieldset": {
                                                        border: "none",
                                                    },
                                                    "&:hover fieldset": {
                                                        border: "none",
                                                    },
                                                    "&.Mui-focused fieldset": {
                                                        border: "none",
                                                    },
                                                },

                                                "& .MuiPickersOutlinedInput-notchedOutline": {
                                                    borderStyle: "none"
                                                },

                                                "& .MuiPickersOutlinedInput-root.Mui-focused:not(.Mui-error) .MuiPickersOutlinedInput-notchedOutline": {
                                                    borderColor: "transparent"
                                                },

                                                "& .MuiPickersOutlinedInput-root.Mui-focused .MuiPickersOutlinedInput-notchedOutline": {
                                                    borderStyle: "none",
                                                    borderWidth: "0px"
                                                },
                                                "& .MuiPickersOutlinedInput-root.Mui-hover .MuiPickersOutlinedInput-notchedOutline": {
                                                    borderStyle: "none",
                                                    borderWidth: "0px"
                                                },

                                                "& .MuiInputLabel-root": {
                                                    color: "gray",
                                                },
                                                "& .MuiInputLabel-root.Mui-focused": {
                                                    color: "black",
                                                },

                                                "& .MuiPickersSectionList-root": {
                                                    padding: "8.5px 14px !important",
                                                },
                                            },
                                        },
                                    }}
                                    required
                                />
                            </LocalizationProvider>
                        )}
                    />

                </div>

                <div className='mb-6'>
                    <p className='mt-0 font-semibold'>Event Description *</p>
                    <Controller
                        control={control}
                        name="description"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                placeholder="Describe your event in detail"
                                id="description"
                                error={!!errors.description}
                                helperText={errors?.description?.message}
                                multiline
                                rows={4}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#f0f0f5",
                                        borderRadius: "12px",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        color: "black",
                                    },
                                }}
                                required
                            />
                        )}
                    />

                    <p className='mt-0 characterCount'>
                        {descVal.length}/20 minimum characters
                    </p>
                </div>

                <Button
                    variant='contained'
                    className='createEventButton'
                    type='submit'
                    disabled={_.isEmpty(dirtyFields) || !isValid}
                >
                    Create Event
                </Button>
            </form>
        </>
    )
}

export default EventForm