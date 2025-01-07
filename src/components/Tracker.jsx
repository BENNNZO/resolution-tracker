export default function Tracker() {
    return (
        <div className="flex-shrink-0 snap-start w-full h-full p-2">
            <div className="bg-neutral-900 w-full h-full rounded-md p-2">
                Tracker
                <input type="range" name="sleep-duration" id="sleep-duration" />
                <input type="range" name="bed-in" id="bed-in" />
                <input type="range" name="bed-out" id="bed-out" />
                <input type="range" name="mood" id="mood" min={0} max={10} />
                <input type="range" name="cals" id="cals" min={0} max={2000} />
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