import PropTypes from 'prop-types';

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

export function LeftRow({ name, odd }) {
  return (
    <div className={`h-9 border ${odd ? "bg-slate-200" : ""}`}>{name}</div>
  );
}

LeftRow.propTypes = {
  name: PropTypes.string.isRequired,
  odd: PropTypes.bool.isRequired,
};

export function RightRow({ odd, name }) {
  return (
    <div className={`flex h-9 border w-max ${odd ? "bg-slate-200" : ""}`}>
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