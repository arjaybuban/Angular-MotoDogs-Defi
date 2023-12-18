import React from 'react';

const ManageSimon = () => {
  return (
    <div className='w-full md:h-[727px] flex flex-col items-center pt-[75px] px-[30px]'>
      <h3 className='times text-[25px] text-grey2 py-[14px] font-[700] text-center'>
        Staking Simon Takes Place Here
      </h3>
      <p className='times text-[18px] text-grey2 font-[400] text-center'>
        Current Staking based on 5% a year (31,536,000 seconds)
      </p>
      <p className='times text-[18px] text-grey2 font-[400] text-center'>
        Excluding leap years compounded quarterly. APY = %5.09
      </p>
      <div className='w-full flex md:flex-row flex-col items-center justify-between mt-[60px] md:gap-0 gap-[10px]'>
        <div className='w-[266px] flex flex-col items-center pt-[16px] border-[6px] border-brown1 rounded-md'>
          <h4 className='text-brown1 text-[18px] font-[700]  times underline'>
            STAKE
          </h4>
          <p className='mt-[30px] text-brown1 text-[18px] times font-[500]'>
            Has to be more than 100.
          </p>
          <input
            type='number'
            className='s-input w-[150px] height-[40px] bg-black1 mt-[44px]'
          />
          <button className='bg-grey1 nav-btn my-[30px]'>Disabled</button>
        </div>
        <div className='w-[266px] flex flex-col items-center pt-[16px] border-[6px] border-brown1 rounded-md'>
          <h4 className='text-brown1 text-[18px] font-[700] underline'>
            UNSTAKE
          </h4>
          <p className='mt-[30px] text-brown1 text-[18px] times text-center font-[500]'>
            Has to be exactly 0 or greater <br /> than 100.
          </p>
          <input
            type='number'
            className='s-input w-[150px] height-[40px] bg-black1 mt-[18px]'
          />
          <button className='bg-grey1 nav-btn my-[30px]'>Disabled</button>
        </div>
        <div className='w-[266px] flex flex-col items-center pt-[16px] border-[6px] border-brown1 rounded-md'>
          <h4 className='text-brown1 text-[18px] font-[700] underline'>
            CLAIM STAKING REWARD
          </h4>
          <p className='mt-[30px] text-brown1 text-[18px] times text-center font-[500]'>
            Potential Reward: <br /> 0
          </p>
          <p className='text-brown1 text-[18px] times text-center font-[500]'>
            Has to be greater than 1 to <br /> claim.
          </p>
          <button className='bg-grey1 nav-btn my-[30px]'>Disabled</button>
        </div>
      </div>
    </div>
  );
};

export default ManageSimon;
