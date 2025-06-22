import { check } from '../assets';
import { pricing } from '../constants';
import Button from './Button';

function PricingList() {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-neutral-800 border border-neutral-600 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-[#FFC876] [&>h4]:even:text-[#AC6AFF] [&>h4]:last:text-[#FF776F]"
        >
          <h4 className="text-[2rem] leading-normal mb-4">{item.title}</h4>

          <p className="font-light text-[0.875rem] leading-6 md:text-base min-h-[4rem] mb-3 text-neutral-100/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="text-[2rem] leading-normal md:text-[2.5rem]">$</div>
                <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
              </>
            )}
          </div>

          <Button
            className="w-full inline-flex mb-6"
            href={item.price ? '/pricing' : 'mailto:contact@jsmastery.pro'}
            white={!!item.price}
          >
            {item.price ? 'Get started' : 'Contact us'}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li key={index} className="flex items-start py-5 border-t border-neutral-600">
                <img src={check} width={24} height={24} alt="Check" />
                <p className="font-light text-[0.875rem] leading-6 md:text-base ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default PricingList;
