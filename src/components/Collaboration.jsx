import Section from './Section';
import { collabApps, collabContent, collabText } from '../constants';
import { brainwaveSymbol, check } from '../assets';
import Button from './Button';
import { LeftCurve, RightCurve } from './design/Collaboration';

function Collaboration() {
  return (
    <Section className={'flex justify-center'} crosses>
      <div className="container lg:flex p-5">
        <div className="max-w-[25rem]">
          <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight mb-4 md:mb-8">
            AI chat app for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="font-light text-[0.875rem] leading-6 md:text-base ml-5">
                    {item.title}
                  </h6>
                </div>
                {item.text && (
                  <p className="font-light text-[0.875rem] leading-6 md:text-base mt-3 text-neutral-400">
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try It Now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem]">
          <p className="font-light text-[0.875rem] leading-6 md:text-base mb-4 text-neutral-400 md:mb-16 lg:mb-32 lg:w-[32rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-neutral-600 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-neutral-600 rounded-full">
              <div
                style={{
                  background:
                    'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)',
                }}
                className="w-[6rem] aspect-square m-auto p-[0.2rem] rounded-full"
              >
                <div className="flex items-center justify-center w-full h-full bg-neutral-800 rounded-full">
                  <img src={brainwaveSymbol} width={48} height={48} alt="brainwave" />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((item, index) => (
                <li
                  style={{ transform: `rotate(${index * 45}deg)` }}
                  key={item.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
                >
                  <div
                    style={{ transform: `rotate(-${index * 45}deg)` }}
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-neutral-700 border-neutral-100/15 rounded-xl`}
                  >
                    <img
                      className="m-auto"
                      width={item.width}
                      height={item.height}
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Collaboration;
