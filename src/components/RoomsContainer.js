import React from 'react';
import RoomsFilter from "./RoomsFilter"
import RoomsList from "./RoomsList"
import { withRoomConsumer, RoomConsumer } from "../context"
import Loading from "./Loading"

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer(RoomContainer)
