import { useState, useEffect, React } from 'react'
import Web3 from 'web3';

import {abi, contractAddress} from './assets';

const MintNFTs = () => {

  const [wallet, setWallet] = useState()
  const [walletConnected, setWalletConnected] = useState(false);
	const [balance, setBalance] = useState('');
	const [supply, setSupply] = useState(10000);
  const [minted, setMinted] = useState('');
	const [amount, setAmount] = useState(1);
	const [price, setPrice] = useState(89);
	const [contract, setContract] = useState('');

  function formatWalletAddress(address) {
    const prefix = address.substring(0, 6);
    const suffix = address.substring(address.length - 4);
    return `${prefix}...${suffix}`;
  }

  const changeAmount = (event) => {
    setAmount(event.target.value)
  }
  

  const loadData = async(/*walletAddress*/) => {
    //const result = await web3.eth.getBalance(walletAddress);
    //setBalance(parseFloat(web3.utils.fromWei(result, "ether")).toFixed(5));

    const contract = new window.web3.eth.Contract(
      abi,
      contractAddress
    );
    setContract(contract);
  
    const totalSupply = await contract.methods.totalSupply().call()
    setSupply(totalSupply)
    var price = parseInt(await contract.methods.usdPrice().call())
    setPrice(parseInt(price / Math.pow(10, 26)))
  }

  const connect = async () => {
		if (window.ethereum) { // check if Ethereum provider is available
			window.web3 = new Web3(window.ethereum);
			
      /*
			const networkId = await window.web3.eth.net.getId();
			if (networkId != 1) {
			await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: '0x1' }], // chainId must be in hexadecimal numbers
				});
			}*/

			await loadData();

			await window.ethereum.request({ method: 'eth_requestAccounts' });

			const accounts = await window.web3.eth.getAccounts();
			console.log(accounts);
			setWallet(accounts[0]);
			setWalletConnected(true);
	
		}
		else {
			throw new Error("No Metamask")
		}
	}

  const mint = async () => {
    if (!walletConnected) {
			try {
				await connect();
			}
			catch (e) {
				alert(e.message)
				return
			}
		}

		const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
     /*
		const networkId = await window.web3.eth.net.getId();
			if (networkId != 1) {
			await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: '0x1' }], // chainId must be in hexadecimal numbers
			});
			}

		const contract = new window.web3.eth.Contract(
		abi,
		contractAddress
		);*/
		

			const contractState = await contract.methods.contractState().call()
			console.log(contractState)

			if (contractState == 1) {
		    var ethPrice = await contract.methods.getPriceEth().call()
        console.log(ethPrice)
        console.log(amount)

					const gas = await contract.methods
						.mintPublic(amount, address[0])
						.estimateGas(
							{ from: address[0], value: ethPrice * amount },
							function (error, gasAmount) {
							if (error) {
								alert(error.message);
								return;
							}
							}
					);
					const method = await contract.methods
						.mintPublic(amount, address[0])
						.send(
							{ from: address[0], value: ethPrice * amount, gas: gas },
							function (error, gasAmount) {
							if (error) {
								alert(error.message);
								return;
							}
							}
					);
					if (method) {
						alert("You have minted successfully!")
					}
					loadData();
			}
		else {
		  alert("Sale is not Open!")
		}
  }


  return (
    <div className='w-full h-fit flex flex-col items-center pt-[20px] pb-[83px] gap-[24px]'>
      <div className='w-[85%] md:w-[570px] h-[152px] border-[6px] border-brown1 rounded-md flex flex-col items-center'>
        <h3 className='roadstore text-grey2 md:text-[50px] text-[30px]'>Mint MotoDogs NFTs</h3>
        <p className='alconica text-grey2 text-[17px]'>
          NFT Collection Address:
        </p>
        {!contractAddress ? <span className='text-red1 font-bold text-[17px]'>*** TBD ***</span> : <span className='text-red1 font-bold text-[17px]'>{formatWalletAddress(contractAddress)}</span>}
      </div>
      <div className='w-[85%] md:w-[570px] h-[473px] border-[6px] border-brown1 rounded-md flex flex-col items-center'>
        <h3 className='times text-[30px] text-brown1 leading-[22.4px] py-[20px]'>
          User Interface
        </h3>
        {!walletConnected ? <button className='nav-btn bg-grey1' onClick={connect}>Connect MetaMask</button> : <button className='nav-btn bg-grey1'>{formatWalletAddress(wallet)}</button>}
        <p className='text-[22px] times mt-[38px] text-brown1'>
          Mint Price: {price}$
        </p>
        <p className='times text-[15px] mt-[30px] text-brown1'>
          Select Quantity
        </p>
        <input
          type='number'
          className='input bg-black1 text-grey4 mb-[26px]'
          step='1'
          placeholder='1'
          onChange={changeAmount}
        />
        <p className='text-[22px] times text-brown1'>Total price: {price * amount}$</p>
        <button className='nav-btn bg-grey1 mt-[16px]' onClick={mint}>Mint</button>
      </div>
    </div>
  );
};

export default MintNFTs;
