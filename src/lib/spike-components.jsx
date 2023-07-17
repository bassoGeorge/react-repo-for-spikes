import PropTypes from 'prop-types';

const rowHeightClass = "h-[50px]"

export function LeftRow({ name, odd }) {
  return (
    <div className={`${rowHeightClass} border ${odd ? "bg-slate-200" : ""}`}>{name}</div>
  );
}

LeftRow.propTypes = {
  name: PropTypes.string.isRequired,
  odd: PropTypes.bool.isRequired,
};

export function RightRow({ odd, name }) {
  return (
    <div className={`flex ${rowHeightClass} border w-max ${odd ? "bg-slate-200" : ""}`}>
      {Array.from({ length: 48 }).map((_, i) => (
        <Cell key={i}>
          { i === 0 && name ? name : ''}
        </Cell>
      ))}
    </div>
  );
}

RightRow.propTypes = {
  odd: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

function Cell({children}) {
  return <div className="w-12 h-full border-r border-slate-500 shrink-0">{children}</div>;
}

Cell.propTypes = {
  children: PropTypes.node,
}