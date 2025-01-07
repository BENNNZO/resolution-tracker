'use client'

import { TimeInput } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { Switch, cn } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

export default function Tracker() {
    const base = "flex flex-row-reverse px-6 py-4 justify-between bg-content2 data-[selected=true]:bg-primary duration-100 min-w-full min-h-12 rounded-xl";

    return (
        <div className="flex-shrink-0 snap-start w-full h-full p-2 max-h-screen">
            <div className="bg-neutral-900 w-full h-full rounded-t-md rounded-b-[45px] p-2 flex flex-col gap-2 overflow-y-scroll pb-52">
                <h1 className="text-center font-semibold my-4 text-2xl">Dashboard</h1>
                <Divider />
                <Slider label="Mood" minValue={0} maxValue={10} size="lg" color="foreground" showSteps />
                <Slider label="Calories" minValue={0} maxValue={2000} size="lg" color="foreground" step={100} showSteps />
                <Slider label="Sleep Time" minValue={0} maxValue={12} size="lg" color="foreground" step={1} showSteps />
                <Divider />
                <div className="flex flex-row gap-2">
                    <TimeInput label="Wake Up" />
                    <TimeInput label="Got In Bed" />
                </div>
                {/* <Divider /> */}

                <div className="grid grid-cols-2 gap-x-2 gap-y-6 place-items-center my-2">
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>Jerk</p>
                    </Checkbox>
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>Outside</p>
                    </Checkbox>
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>Exercise</p>
                    </Checkbox>
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>School</p>
                    </Checkbox>
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>Work</p>
                    </Checkbox>
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>Game</p>
                    </Checkbox>
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>Smoke</p>
                    </Checkbox>
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>Nic</p>
                    </Checkbox>
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>Alc</p>
                    </Checkbox>
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>Socialized</p>
                    </Checkbox>
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>Cleaned</p>
                    </Checkbox>
                    <Checkbox classNames={{ base: cn(base) }}>
                        <p>Cooked</p>
                    </Checkbox>
                </div>

                <Textarea label="Notes" isClearable />

                {/* Keeping this just in case I want to change back to the switch UI instead of check boxes*/}
                {/* <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Jerk</p>
                </Switch> */}
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