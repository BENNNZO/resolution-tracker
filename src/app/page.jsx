import Tracker from "@/components/Tracker";
import Stats from "@/components/Stats";

export default function Home() {
	return (
		<div className="grid place-items-center h-screen">
			<div className="fixed h-24 w-full bottom-0 left-0 bg-gradient-to-t from-neutral-950 to-transparent z-20"></div>
			<div className="flex flex-row w-full h-full snap-x snap-mandatory overflow-x-scroll bg-black overflow-y-hidden">
				<Tracker />
				<Stats />
			</div>
		</div>
	);
}
