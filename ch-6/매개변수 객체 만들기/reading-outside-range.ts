import { Station } from "./station";

function readingOutsideRange(station: Station, min: number, max: number) {
  return station.readings
    .filter(r => r.temp < min || r.temp > max);
}
