import { loading } from '../assets';

function Generating({ className }) {
  return (
    <div
      className={`flex items-center h-[3.5rem] rounded-3xl px-6 bg-neutral-800/80 ${
        className || ''
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="loading" />
      AI is generating
    </div>
  );
}

export default Generating;
