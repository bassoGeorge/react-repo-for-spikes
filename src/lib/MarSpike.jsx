import { SyncScroll, useSyncScroll } from "./scrollSync/ScrollSync";

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

import PropTypes from "prop-types";

function Row({ children, odd }) {
  return (
    <div className={`h-9 border w-max ${odd ? "bg-slate-200" : ""}`}>
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  odd: PropTypes.bool.isRequired,
};

function LeftRow({ name, odd }) {
  return (
    <div className={`h-9 border ${odd ? "bg-slate-200" : ""}`}>{name}</div>
  );
}

LeftRow.propTypes = {
  name: PropTypes.string.isRequired,
  odd: PropTypes.bool.isRequired,
};

function RightRow({ odd }) {
  return (
    <div className={`flex h-9 border w-max ${odd ? "bg-slate-200" : ""}`}>
      {Array.from({ length: 48 }).map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
}

RightRow.propTypes = {
  odd: PropTypes.bool.isRequired,
};

function Cell() {
  return <div className="w-12 h-full border shrink-0"></div>;
}
