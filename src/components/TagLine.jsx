import brackets from '../assets/svg/Brackets';

function TagLine({ className, children }) {
  return (
    <div className={`tracking-[0.15rem] flex items-center ${className || ''}`}>
      {brackets('left')}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets('right')}
    </div>
  );
}

export default TagLine;
