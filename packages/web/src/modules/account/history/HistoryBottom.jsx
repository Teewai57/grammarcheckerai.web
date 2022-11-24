import { useState} from 'react';
import Errors from './errors';
import search from '../../../assets/search.svg';
import arrowDown from '../../../assets/arrowDown.svg';
import arrowUp from '../../../assets/arrowUp.svg';






const HistoryBottom = () => {
    const [openId, setOpenId] = useState(null);
    const [open, setOpen] = useState(false);
    const [toggleComp,setToggleComp] = useState(true)
  return (
    <>
       {  toggleComp ? ( <div className="flex flex-col items-start md:ml-[7rem] mt-16">
        <p className="text-[#EC1B1B] sm:text-base text-[14px] font-medium font-['DM_Sans'] leading-5 mb-7 cursor-pointer">
          Clear history
        </p>
        <div className="w-full">
          {historyDays.map((days) => (
            <>
              <div key={days.date} className="flex justify-between items-center mb-6">
                <p className="text-[#5A5A5A] sm:text-base text-[12px] font-normal leading-5 font-['Inter']">
                  {days.date}
                </p>
                <button
                  onClick={() => {
                    setOpenId(days.id);
                    setOpen(!open);
                  }}
                >
                  <img src={openId === days.id && open ? arrowUp : arrowDown} alt="" className="w-[35px] h-[7px]" />
                </button>
              </div>
              {openId === days.id && open && <Errors id={days.id}  setToggleComp = {setToggleComp} />}
            </>
          ))}
        </div>
      </div>) :    <Correction /> }
    </>
  )
}

export default HistoryBottom