'use client'

import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";
import { TimeInput, Slider, Checkbox, Divider, Textarea, Button, Alert, Spinner, cn } from "@nextui-org/react";

export default function Tracker() {
    // styling used for checkboxes
    const base = "flex flex-row-reverse px-6 py-4 justify-between bg-content2 data-[selected=true]:bg-primary duration-200 min-w-full min-h-12 rounded-xl";

    const [date, setDate] = useState(moment().format('MMM DD, YYYY'))
    const [updating, setUpdating] = useState(false)
    const [alertState, setAlertState] = useState(false)
    const [errorState, setErrorState] = useState(false)
    const [userData, setUserData] = useState(null)

    // hide success alert after 3 seconds
    useEffect(() => {
        if (alertState) {
            setTimeout(() => {
                setAlertState(false)
            }, 3000)
        }
    }, [alertState]);

    // hide error alert after 3 seconds
    useEffect(() => {
        if (errorState) {
            setTimeout(() => {
                setErrorState(false)
            }, 3000)
        }
    }, [errorState]);

    // to fetch user data when date changes
    useEffect(() => {
        getData(date)
    }, [date]);

    // Function to fetch user data from the server
    function getData(dateArg) {
        axios.get(`/api/userData?date=${dateArg}`)
        .then(res => {
            console.log(res.data)
            setUserData(res.data)
        })
        .catch(err => {
            console.error(err);
        })
    }

    // Function to update user data on the server
    function updateData() {
        setUpdating(true)

        axios.post(`/api/userData`, { date, data: userData })
        .then(res => {
            console.log(res.data)
            setAlertState(true)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        })
        .catch(err => {
            console.error(err);
            setErrorState(true)
        })
         
        setUpdating(false);
    }

    // Function to go to the previous day
    function goBack() {
        setDate(date => moment(date).subtract(1, "day").format('MMM DD, YYYY'))
    }

    // Function to go to the next day
    function goForward() {
        setDate(date => moment(date).add(1, "day").format('MMM DD, YYYY'))
    }

    return (
        <div className="flex-shrink-0 snap-start w-full h-full p-2 max-h-screen">
            {/* THIS IS FOR DEBUGGING */}
            {/* <pre className="absolute bg-red-400 text-yellow-200 font-bold text-sm top-4 left-4 z-30">
                {JSON.stringify(userData, null, 4)}
            </pre> */}

            {/* Success alert */}
            { alertState &&
                <Alert color="success" title="Data has been successfully updated!" variant="solid" classNames={{ base: cn("absolute z-30 w-[calc(100vw-1rem)] alert")}}/>
            }
            {/* Error alert */}
            { errorState &&
                <Alert color="error" title="Data failed to update!" variant="solid" classNames={{ base: cn("absolute z-30 w-[calc(100vw-1rem)] alert")}}/>
            }
            {/* Show spinner while data is loading */}
            { userData === null ? (
                <div className="min-w-screen min-h-screen grid place-items-center">
                    <Spinner />
                </div>
            ) : (
                <div className="bg-content1 w-full h-full rounded-t-md rounded-b-[45px] p-2 flex flex-col gap-2 overflow-y-scroll relative pb-24">
                    <div className="my-4 flex flex-row justify-between items-center">
                        <button className="bg-content1 aspect-square w-12 rounded-md text-xl font-bold" onClick={() => goBack()}>{"<"}</button>
                        <div>
                            <h1 className="text-center font-semibold text-2xl">Dashboard</h1>
                            <p className="text-center">{date}</p>
                        </div>
                        <button className="bg-content1 aspect-square w-12 rounded-md text-xl font-bold" onClick={() => goForward()}>{">"}</button>
                    </div>
                    
                    <Divider />
                    
                    {/* Mood slider */}
                    <Slider label="Mood" minValue={0} maxValue={10} value={[userData.mood]} size="lg" color="foreground" showSteps onChange={e => {
                        console.log(e)
                        setUserData({ ...userData, mood: e[0] })
                    }} />
                    {/* Calories slider */}
                    <Slider label="Calories" minValue={0} maxValue={2000} value={[userData.calories]} size="lg" color="foreground" step={100} showSteps onChange={e => {
                        console.log(e)
                        setUserData({ ...userData, calories: e[0] })
                    }} />
                    {/* Sleep time slider */}
                    <Slider label="Sleep Time" minValue={0} maxValue={12} value={[userData.sleepDuration]} size="lg" color="foreground" step={1} showSteps onChange={e => {
                        console.log(e)
                        setUserData({ ...userData, sleepDuration: e[0] })
                    }} />
                    
                    <Divider className="my-2"/>
                    
                    {/* Time inputs for wake up and sleep times */}
                    <div className="flex flex-row gap-2">
                        <TimeInput label="Wake Up" value={userData.wakeupTime} onChange={e => setUserData({ ...userData, wakeupTime: e })} />
                        <TimeInput label="Got In Bed" value={userData.sleepTime} onChange={e => setUserData({ ...userData, sleepTime: e })} />
                    </div>

                    <Divider className="my-2"/>

                    <div className="grid grid-cols-2 gap-x-2 gap-y-6 place-items-center my-2">
                        {/* Various activity checkboxes */}
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.outside} onValueChange={e => setUserData({ ...userData, outside: e })}>
                            <p>Outside</p>
                        </Checkbox>
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.exercise} onValueChange={e => setUserData({ ...userData, exercise: e })}>
                            <p>Exercise</p>
                        </Checkbox>
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.school} onValueChange={e => setUserData({ ...userData, school: e })}>
                            <p>School</p>
                        </Checkbox>
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.work} onValueChange={e => setUserData({ ...userData, work: e })}>
                            <p>Work</p>
                        </Checkbox>
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.game} onValueChange={e => setUserData({ ...userData, game: e })}>
                            <p>Game</p>
                        </Checkbox>
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.socialized} onValueChange={e => setUserData({ ...userData, socialized: e })}>
                            <p>Socialized</p>
                        </Checkbox>
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.cleaned} onValueChange={e => setUserData({ ...userData, cleaned: e })}>
                            <p>Cleaned</p>
                        </Checkbox>
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.cooked} onValueChange={e => setUserData({ ...userData, cooked: e })}>
                            <p>Cooked</p>
                        </Checkbox>
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.jerk} onValueChange={e => setUserData({ ...userData, jerk: e })}>
                            <p>Jerk</p>
                        </Checkbox>
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.smoke} onValueChange={e => setUserData({ ...userData, smoke: e })}>
                            <p>Smoke</p>
                        </Checkbox>
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.nic} onValueChange={e => setUserData({ ...userData, nic: e })}>
                            <p>Nic</p>
                        </Checkbox>
                        <Checkbox classNames={{ base: cn(base) }} isSelected={userData.alc} onValueChange={e => setUserData({ ...userData, alc: e })}>
                            <p>Alc</p>
                        </Checkbox>
                    </div>

                    <Divider className="my-2"/>

                    {/* Notes textarea */}
                    <Textarea label="Notes" value={userData.notes} isClearable onValueChange={e => setUserData({ ...userData, notes: e })} />

                    <Divider className="my-2"/>

                    {/* Update button */}
                    <Button className="min-h-12 bg-content2" size="lg" isLoading={updating} onPress={() => updateData()}>{updating ? "" : "Update"}</Button>
                </div>
            )}
        </div>
    );
}