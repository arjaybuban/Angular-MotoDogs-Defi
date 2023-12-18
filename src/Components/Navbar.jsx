import React from 'react';
import {
  logo,
  discord,
  facebook,
  instagram,
  twitter,
  youtube
} from '../Assets';

const Navbar = () => {
  return (
    <div className='w-full h-fit flex flex-col'>
      <div className='w-full h-fit flex justify-between py-[15px] px-[25px]'>
        <img src={logo} alt='logo' className='w-[222px] h-[192px]' />
        <div className='flex flex-col mt-[20px]'>
          <ul className='flex items-end gap-[15px] flex-wrap'>
            <li className='px-[10px] text-[20px] text-grey2 font-[700] tracking-wide times hover:text-blue5 cursor-pointer'>
              <a href='https://www.motodogscycleclub.com/'>HOME</a>
            </li>
            <li className='px-[10px] text-[20px] text-grey2 font-[700] tracking-wide times hover:text-blue5 cursor-pointer'>
            <a href='https://www.motodogscycleclub.com/simon'>SIMON</a>
            </li>
            <li className='px-[10px] text-[20px] text-grey2 font-[700] tracking-wide times hover:text-blue5 cursor-pointer'>
            <a href='https://www.motodogscycleclub.com/nfts'>NFTs</a>
            </li>
            <li className='px-[10px] text-[20px] text-grey2 font-[700] tracking-wide times hover:text-blue5 cursor-pointer'>
            <a href='https://www.motodogscycleclub.com/game'>GAME</a>
            </li>
            <li className='px-[10px] text-[20px] text-grey2 font-[700] tracking-wide times hover:text-blue5 cursor-pointer'>
            <a href='https://www.motodogscycleclub.com/defi'>DEFI</a>
            </li>
            <li className='px-[10px] text-[20px] text-grey2 font-[700] tracking-wide times hover:text-blue5 cursor-pointer'>
            <a href='https://motodogs-organization.gitbook.io/motodogs-cycle-club/'>ABOUT</a>
            </li>
            <li className='px-[10px] text-[20px] text-grey2 font-[700] tracking-wide times hover:text-blue5 cursor-pointer'>
            <a href='https://www.motodogscycleclub.com/team'>TEAM</a>
            </li>
          </ul>
          <ul className='w-full flex justify-end gap-[10px] mt-[30px]'>
          <li>
          <a href='https://twitter.com/MotoDogs_CC'><img src={twitter} alt='twitter' className='w-[29px] h-[29px]' /></a>
            </li>
            <li>
            <a href='https://www.facebook.com/people/MotoDogs-CycleClub/pfbid0TGenHZeixCvJeaZghuwq5tjXG56iWLKd121swEAXViAaysDka19fc6TuxX3ZdhbJl/'><img
                src={facebook}
                alt='facebook'
                className='w-[29px] h-[29px]'
              /></a>
            </li>
            <li>
            <a href='https://discord.com/invite/9UYd5gC2UF'><img src={discord} alt='discord' className='w-[29px] h-[29px]' /></a>
            </li>
            {/*<li>
              <img src={youtube} alt='youtube' className='w-[29px] h-[29px]' />
  ``````````</li>*/}
            
           {/* <li>
              <img
                src={instagram}
                alt='instagram'
                className='w-[29px] h-[29px]'
              />
</li>*/}
            
          </ul>
        </div>
      </div>
      <div className='w-full h-[6px] bg-brown2 border-t-[2px] border-white'></div>
      <div className='w-full h-[10px] bg-brown2 border-t-[5px] border-white'></div>
    </div>
  );
};

export default Navbar;
