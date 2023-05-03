import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'

const RoleAssignmentPage = () => {

    const [selectedUserRole, setSelectedUserRole] = useState<string>("");
    const [numOfModerators, setNumOfModerators] = useState(0);
    const [numOfDebators, setNumOfDebators] = useState(0);

    const onEnterRoomButtonClicked = () => {
        console.log("User enters the debate rooms");
        // TODO: navigate to the appropriate debate room. This also requires checks for number of moderators & debators in the room now
    }

    const onUserRoleSelected = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setSelectedUserRole(event.target.value)
    }

    return (
        <div className='m-8 grid justify-items-center'>

            <div className='my-8'>
                <Typography variant='h5' className='pb-4'>Each debate room can have 1 moderator and 2 debators</Typography>
                <Typography>Number of Moderators in the room: {numOfModerators}</Typography>
                <Typography>Number of Debators in the room: {numOfDebators}</Typography>
            </div>

            <div className='my-8'>
                <FormControl>
                    <FormLabel>Select your role for this Discussion room.</FormLabel>
                    <RadioGroup
                        value={selectedUserRole}
                        onChange={(event) => onUserRoleSelected(event)}
                    >
                        <FormControlLabel value="moderator" control={<Radio />} label="Moderator" />
                        <FormControlLabel value="debator" control={<Radio />} label="Debator" />
                    </RadioGroup>
                </FormControl>
            </div>


            <Button variant='contained' disabled={!selectedUserRole} onClick={()=>onEnterRoomButtonClicked()}>Enter Debate Room</Button>
        </div>
    )
}

export default RoleAssignmentPage