import CurrentBus from "@/components/Mobile/Current/CurrentBus";
import { currentData } from "@/mocks/current";

export default function Main() {
  return (
    <CurrentBus currentData={currentData} />
  );
}

