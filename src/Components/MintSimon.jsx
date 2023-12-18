import React from 'react';
import { coingif } from '../Assets/index';

const MintSimon = () => {
  return (
    <div className='w-full pt-[50px] flex flex-col items-center justify-center'>
      <h3 className='roadstore text-grey2 md:text-[50px] text-[30px]'>Mint Simon</h3>
      <a
        href='/'
        className='text-[17px] times font-[700] text-grey2 underline mb-[60px]'
      >
        Contract Address: 0x25b9DD7749942eaa95eF63f0A6FA0449c3d6A0f0
      </a>
      <div className='w-[85%] md:w-[567px] h-[728px] flex flex-col items-center border-[6px] border-brown1 rounded-md mb-[30px] pt-[5px]'>
        <img src={coingif} alt='' className='w-[227px] h-[227px]' />
        <p className='times text-[30px] text-brown1 leading-[22.4px] py-[20px]'>
          Your address:
        </p>
        <p className='mt-[30px] times text-[30px] text-brown1 leading-[22.4px] py-[20px]'>
          Your SIMON:
        </p>
        <span className='times text-[15px] mt-[30px] mb-[10px] text-brown1'>
          Select Quantity
        </span>
        <input
          type='number'
          className='input bg-black1 text-grey4 mb-[26px]'
          step='1'
          placeholder='0'
        />
        <p className='times text-[22px] text-brown1 leading-[22.4px] py-[20px] text-center'>
          Total price without gas fees for 0 SIMON is 0 ETH
        </p>
        <button className='nav-btn bg-grey1 mt-[16px]'>Disabled</button>
      </div>
    </div>
  );
};

export default MintSimon;
