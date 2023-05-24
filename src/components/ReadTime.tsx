import ClockIcon from '../../public/icons/clock.svg'

const ReadTime = (props: any) => (
  <div className="w-full flex ml-3 mb-3 text-teal-600">
    <ClockIcon fill="#14b8a6" width="20px" height="20px" />
    <p className="ml-2 text-md md:text-sm" style={{ marginTop: '-1px' }}>Lo lees en menos de un minuto</p>
  </div>
);

export default ReadTime
