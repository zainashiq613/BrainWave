import Section from './Section';
import Heading from './Heading';
import { service1, service2, service3, check } from '../assets';
import { brainwaveServices, brainwaveServicesIcons } from '../constants';
import Generating from './Generating';
import { Gradient, VideoBar, VideoChatMessage, PhotChatMessage } from './design/Services';

function Services() {
  return (
    <Section id={'how-to-use'} className={'flex items-center justify-center'}>
      <div className="conatine w-[94%]">
        <Heading
          title={'Generative AI made for Creators'}
          text={'Brainwave unlock the potentials of AI-powered applications'}
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border-neutral-100/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={service1}
                alt="smart AI"
              />
            </div>
            <div className="relatve z-1 maz-w-[17rem] ml-auto">
              <h4 className="text-[2rem] leading-normal mb-4">Smatest AI</h4>
              <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-neutral-300">
                Brainwave unlocks the potential of AI-Powered applications
              </p>
              <ul className="font-light text-[0.875rem] leading-6 md:text-base">
                {brainwaveServices.map((item, index) => (
                  <li key={index} className="flex items-center py-4 border-t border-neutral-600">
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating
              className={
                'absolute left-4 right-4 bottom-4 border-neutral-100/10 border md:left-1/2 md:right-auto md:bottom-8 md:translate-x-1/2'
              }
            />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-neutral-100/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-neutral-800/0 to-neutral-800/90 lg:p-15">
                <h4 className="text-[2rem] leading-normal mb-4">Photo editing</h4>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-neutral-300">
                  Brainwave unlocks the potential of AI-Powered applications
                </p>
              </div>
              <PhotChatMessage />
            </div>
            <div className="p-4 bg-neutral-700 rounded-3xl overflow-hidden min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="text-[2rem] leading-normal mb-4">Video Generation</h4>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[2rem] text-neutral-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, illo nobis sit
                  numquam consequatur laboriosam?
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      style={
                        index === 2
                          ? {
                              background:
                                'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)',
                            }
                          : {}
                      }
                      key={index}
                      className={`flex items-center rounded-2xl justify-center ${
                        index === 2
                          ? 'w-[4rem] h-[4rem] p-0.25 md:w-[4.5rem]'
                          : 'flex w-10 h-10 bg-neutral-600 md:w-15 md:h-15'
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? 'flex items-center justify-center w-full h-full bg-neutral-700 rounded-[1rem]'
                            : ''
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-neutral-800 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
}

export default Services;
