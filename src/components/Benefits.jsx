import { benefits } from '../constants';
import Heading from './Heading';
import Section from './Section';
import Arrow from '../assets/svg/Arrow';
import { GradientLight } from './design/Benefits';

import ClipPath from '../assets/svg/ClipPath';

function Benefits() {
  return (
    <Section id={'features'}>
      <div className="container relative z-2">
        <Heading
          className={'md:max-w-md lg:max-w-2xl'}
          title={'Chat Smarter, Not Harder With Brainwave'}
        />
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((item) => (
            <div
              style={{
                backgroundImage: `url("${item.backgroundUrl}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="text-2xl leading-normal mb-5">{item.title}</h5>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-6 text-neutral-300">
                  {item.text}
                </p>
                <div className="flex items-center mt-auto">
                  <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                  <p className="ml-auto font-code text-xs font-bold text-neutral-100 uppercase tracking-wider">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-neutral-800"
                style={{ clipPath: 'url(#benefits)' }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-1000 hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={326}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Benefits;
