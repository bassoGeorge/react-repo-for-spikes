import { SyncScroll, useSyncScroll } from "./scrollSync/ScrollSync";
import { LeftRow, RightRow } from "./spike-components";

export function MarSpike() {
  return (
    <SyncScroll>
      <SpikeContent />
    </SyncScroll>
  );
}

function SpikeContent() {
  const [pane1] = useSyncScroll();
  const [pane2] = useSyncScroll();

  const numberOfRows = 30;
  const items = Array.from({ length: numberOfRows }).map((_, i) => i);
  return (
    <div className="w-full border h-[60vh] grid grid-cols-10 grid-rows-6">
      <div className="col-span-3 row-span-1 border-r">TOP LEFT DATE field</div>
      <div className="col-span-7 row-span-6 border grid grid-cols-1 grid-rows-6">
        <div className="border">Header</div>
        <div className="border row-span-5 overflow-auto" ref={pane1}>
          {items.map((i) => {
            const odd = i % 2 === 1;
            return <RightRow key={i} odd={odd} />;
          })}
        </div>
      </div>
      <div className="col-span-3 row-span-5 border overflow-auto" ref={pane2}>
        {items.map((i) => {
          const odd = i % 2 === 1;
          return <LeftRow key={i} odd={odd} name={"MEDICINE - " + i} />;
        })}
      </div>
    </div>
  );
}
