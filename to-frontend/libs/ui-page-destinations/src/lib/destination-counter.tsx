interface GtDestinationCounter {
  count: number;
}
export function DestinationCounter({ count }: GtDestinationCounter) {
  return (
    <div>
      <h1>Total Destination Count: {count}</h1>
    </div>
  );
}
