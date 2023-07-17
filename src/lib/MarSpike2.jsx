import { LeftRow, RightRow } from "./spike-components";

export function MarSpike2() {
  return <NewSpikeContent />;
}

function NewSpikeContent() {
  return (
    <div className="h-[60vh] overflow-auto border border-slate-400">
      <div className="grid grid-cols-10">
        <div className="col-span-3">
          <LeftHandFull />
        </div>
        <div className="col-span-7">
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
      <header className="sticky border border-red-400 h-[90px] w-full top-0 bg-slate-100 flex flex-col justify-between">
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
      <header className="sticky border border-orange-400 h-[90px] w-full top-0 bg-slate-100">
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
