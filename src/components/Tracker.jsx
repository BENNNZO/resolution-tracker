'use client'

import { useState, useEffect } from "react";
import { TimeInput, Slider, Checkbox, Divider, Textarea, Button, Alert, cn } from "@nextui-org/react";
import axios from "axios";

export default function Tracker() {
    const base = "flex flex-row-reverse px-6 py-4 justify-between bg-content2 data-[selected=true]:bg-primary duration-200 min-w-full min-h-12 rounded-xl";
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const [updating, setUpdating] = useState(false)
    const [alertState, setAlertState] = useState(false)
    const [userData, setUserData] = useState({
        mood: 0,
        calories: 0,
        sleepTime: 0,
        wakeUp: null,
        gotInBed: null,
        jerk: false,
        outside: false,
        exercise: false,
        school: false,
        work: false,
        game: false,
        smoke: false,
        nic: false,
        alc: false,
        socialized: false,
        cleaned: false,
        cooked: false,
        notes: ""
    })

    function getData(date) {
        axios.get("/api/userData")
        .then(res => {
            console.log(res.data)
            setUserData(res.data)
        })
        .catch(err => {
            console.error(err);
        })
    }

    function updateData() {
        setUpdating(true)

        axios.get("/api/userData")
        .then(res => {
            console.log(res.data)
            setUpdating(false)
            setAlertState(true)
        })
        .catch(err => {
            console.error(err);
            setUpdating(false);
        })
    }

    useEffect(() => {
        if (alertState) {
            setTimeout(() => {
                setAlertState(false)
            }, 3000)
        }
    }, [alertState]);

    return (
        <div className="flex-shrink-0 snap-start w-full h-full p-2 max-h-screen">
            {/* <pre className="absolute bg-red-400 text-yellow-200 font-bold text-lg top-4 left-4 z-30">
                {JSON.stringify(userData, null, 4)}
            </pre> */}
            { alertState &&
                <Alert color="success" title="Data has been successfully updated!" variant="solid" classNames={{ base: cn("absolute z-30 w-[calc(100vw-1rem)] alert")}}/>
            }
            <div className="bg-content1 w-full h-full rounded-t-md rounded-b-[45px] p-2 flex flex-col gap-2 overflow-y-scroll relative pb-24">
                <div className="my-4 flex flex-row justify-between items-center">
                    <button className="bg-content1 aspect-square w-12 rounded-md text-xl font-bold">{"<"}</button>
                    <div>
                        <h1 className="text-center font-semibold text-2xl">Dashboard</h1>
                        <p className="text-center">{currentDate}</p>
                    </div>
                    <button className="bg-content1 aspect-square w-12 rounded-md text-xl font-bold">{">"}</button>
                </div>
                
                <Divider />
                
                <Slider label="Mood" minValue={0} maxValue={10} size="lg" color="foreground" showSteps onChangeEnd={e => {
                    console.log(e)
                    setUserData({ ...userData, mood: e[0] })
                }} />
                <Slider label="Calories" minValue={0} maxValue={2000} size="lg" color="foreground" step={100} showSteps onChangeEnd={e => {
                    console.log(e)
                    setUserData({ ...userData, calories: e[0] })
                }} />
                <Slider label="Sleep Time" minValue={0} maxValue={12} size="lg" color="foreground" step={1} showSteps onChangeEnd={e => {
                    console.log(e)
                    setUserData({ ...userData, sleepTime: e[0] })
                }} />
                
                <Divider className="my-2"/>
                
                <div className="flex flex-row gap-2">
                    <TimeInput label="Wake Up" onChange={e => setUserData({ ...userData, wakeUp: e })} />
                    <TimeInput label="Got In Bed" onChange={e => setUserData({ ...userData, wakeUp: e })} />
                </div>

                <Divider className="my-2"/>

                <div className="grid grid-cols-2 gap-x-2 gap-y-6 place-items-center my-2">
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
                </div>

                <Divider className="my-2"/>

                <Textarea label="Notes" isClearable onValueChange={e => setUserData({ ...userData, notes: e })} />

                <Divider className="my-2"/>

                <Button className="min-h-12 bg-content2" size="lg" isLoading={updating} onPress={() => updateData()}>{updating ? "" : "Update"}</Button>
            </div>
        </div>
    );
}

// SLIDERS --------
// sleep duration
// wakeup time
// sleep time
// overall mood
// cals

// BOOLEANS --------
// jerk
// outisde
// exercise
// school
// work
// game
// smoke
// nic
// alc
// socialized
// cleaned
// cooked