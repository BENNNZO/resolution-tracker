import Tracker from "@/components/Tracker";
import Stats from "@/components/Stats";

export default function Home() {
	return (
		<div className="grid place-items-center h-screen">
			<div className="flex flex-row w-full h-full snap-x snap-mandatory overflow-x-scroll bg-neutral-950">
				<Tracker />
				<Stats />
			</div>
		</div>
	);
}
