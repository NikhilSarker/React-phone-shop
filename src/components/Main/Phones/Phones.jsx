
import PropTypes from 'prop-types';
import PhoneCard from './PhoneCard';

const Phones = ({phones}) => {
 
  return (
    <div className='max-w-[1320px] m-auto'>
      <h3 className="text-center font-bold text-3xl py-7">Our Phones Collection </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          phones?.map((phone)=><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
        }
      </div>
    </div>
  );
};
Phones.propTypes = {
  phones:PropTypes.array.isRequired
}
export default Phones;