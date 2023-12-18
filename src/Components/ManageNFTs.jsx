import React from 'react';
import left2 from '../Assets/left2.webp'
import right2 from '../Assets/right2.webp'

const ManageNFTs = () => {
  return (
    <div className='w-full md:h-[1033px] h-fit flex flex-col pt-[10px] items-center md:px[0px] px-[20px]'>
      <p className='times text-[25px] text-grey2 py-[14px] font-[700] text-center'>
        Staking MotoDogs Cycle Club NFTs will take place here.
      </p>
      <p className='times text-[18px] text-grey2 py-[14px] font-[700] text-center'>
        Stake an NFT and earn 24 SIMON Tokens a day for up to 10 years.
      </p>
      <p className='times text-[17px] text-grey2 py-[20px] font-[700] text-center'>
        YOUR SIMON TOKENS (0)
      </p>
      <div className='w-full h-fit flex md:flex-row flex-col items-center justify-between px-[64px] mt-[80px]'>
        <div className='w-[359px] flex flex-col items-center'>
          <h3 className='times text-[17px] text-grey2 py-[20px] font-[700]'>
            UNSTAKED NFTS(1)
          </h3>
          <div className='w-full border-[6px] border-brown1 rounded-md flex flex-col flex-grow items-center pt-[10px] pb-[40px]'>
            <p className='times text-[17px] text-grey2 font-[700] py-[20px]'>
              Day Cruiser # 7
            </p>
            <img
              src={left2}
              alt='img'
              className='w-[270px] h-[280px] mb-[30px]'
            />
            <button className='nav-btn w-[152px] h-[45px] bg-grey1'>
              Stake
            </button>
          </div>
        </div>
        <div className='w-[359px] flex flex-col items-center'>
          <h3 className='times text-[17px] text-grey2 py-[20px] font-[700]'>
            STAKED NFTS(1)
          </h3>
          <div className='w-full border-[6px] border-brown1 rounded-md flex flex-col flex-grow items-center pt-[10px] pb-[40px]'>
            <p className='times text-[17px] text-grey2 font-[700] py-[20px]'>
              Night Racer # 14
            </p>
            <img
              src={right2}
              alt='img'
              className='w-[270px] h-[280px] mb-[30px]'
            />
            <button className='nav-btn w-[152px] h-[45px] bg-blue1'>
              Unstake
            </button>
            <button className='nav-btn w-[152px] h-[45px] bg-blue1 mt-[16px]'>
              Claim 32 SIMON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageNFTs;
