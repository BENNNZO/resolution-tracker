'use client'

import { TimeInput } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { Switch, cn } from "@nextui-org/react";

export default function Tracker() {
    return (
        <div className="flex-shrink-0 snap-start w-full h-full p-2 max-h-screen">
            <div className="bg-neutral-900 w-full h-full rounded-md p-2 flex flex-col gap-2">
                <Slider label="Mood" minValue={0} maxValue={10} size="lg" color="foreground" showSteps />
                <Slider label="Calories" minValue={0} maxValue={2000} size="lg" color="foreground" step={100} showSteps />
                <TimeInput label="Event Time" />

                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Jerk</p>
                </Switch>
                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Outside</p>
                </Switch>
                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Exercise</p>
                </Switch>
                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>School</p>
                </Switch>
                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Work</p>
                </Switch>
                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Game</p>
                </Switch>
                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Smoke</p>
                </Switch>
                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Nic</p>
                </Switch>
                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Alc</p>
                </Switch>
                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Socialized</p>
                </Switch>
                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Cleaned</p>
                </Switch>
                <Switch size="lg" classNames={{ base: cn("flex flex-row-reverse justify-between cursor-pointer bg-content2 px-4 py-2 rounded-md min-w-full") }}>
                    <p>Cooked</p>
                </Switch>
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