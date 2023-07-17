import { LeftRow, RightRow } from "./spike-components";
import { SyncScroll, useSyncScroll } from "./scrollSync/ScrollSync";

export function MarSpike2b() {
  return (
    <SyncScroll>
      <NewSpikeContent />
    </SyncScroll>
  );
}

const headerHeightClass = 'h-[100px]'

function NewSpikeContent() {
  const [pane1] = useSyncScroll();
  const [pane2] = useSyncScroll();

  return (
    <div className="h-[60vh] overflow-auto border border-slate-400">
      <div className="grid grid-cols-10 h-full">
        <div id='left-medicine' className="col-span-3 h-full overflow-auto" ref={pane1} >
          <LeftHandFull />
        </div>
        <div className="col-span-7 h-full overflow-auto" ref={pane2}>
          <RightHandFull />
        </div>
      </div>
    </div>
  );
}

function RightHandFull() {
  const items = Array.from({ length: 60 }).map((_, i) => i);
  return (
    <div id="area-with-header" className="w-max">
      <header className={ `${headerHeightClass} sticky border-2 border-red-400 w-full top-0 bg-slate-100 flex flex-col justify-between` }>
        <h3>Header</h3>
        <RightRow name="time" odd={false} />
      </header>
      <div className="border border-blue-400">
        {items.map((i) => {
          const odd = i % 2 === 1;
          return <RightRow key={i} odd={odd} name={"c" + (i + 1)} />;
        })}
      </div>
    </div>
  );
}

function LeftHandFull() {
  const items = Array.from({ length: 60 }).map((_, i) => i);
  return (
    <div id="left-area-with-header" className="w-full">
      <header className={ `${headerHeightClass} sticky border-2 border-orange-400 w-full top-0 bg-slate-100` }>
        Medicines
      </header>
      <div className="border border-blue-400">
        {items.map((i) => {
          const odd = i % 2 === 1;
          return <LeftRow key={i} odd={odd} name={"m" + (i + 1)} />;
        })}
      </div>
    </div>
  );
}
