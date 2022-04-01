import React, {RefObject} from "react";
import "./HowTo.scss";
interface HowToProps {
    refToUse: RefObject<HTMLDivElement>
}
function HowTo({refToUse}:HowToProps) {
  return (
	<div ref={refToUse} id="how-to" className="card how-to">
		<h2>
			<span>How </span>To
		</h2>
		<div>
			<h3>1. How to Connect a crypto wallet:</h3>
			<p>
				A Metamask wallet is required for the storage of crypto currency and for the storage of your
				Martian. Press the “connect Wallet” Button in the top right corner once metamask has been
				added to your browser extension of choice. For more information on how to set up your
				metamask wallet, please visit https://metamask.io/
			</p>
		</div>
		<div>
			<h3>2. Buying the correct amount of MATIC.</h3>
			<p>
				Matic is the currency used on the polygon blockchain network. Log in to or sign up with your
				favorite crypto exchange. FTX, Coinbase, and crypto.com are popular choices. Use the
				exchange to purchase your MATIC. We recommend buying an extra little bit of MATIC for the
				Gas Fees (still WAYYYY lower than ETH gas fees). You can see an estimation of these fees in
				our discord server where we have a MATIC gas tracker. Once you have purchased the
				appropriate amount of MATIC from the exchange, send it to your wallet. Now you are ready to
				mint your Martian. NOTE: we recommend purchasing and moving the matic into your metamask
				ahead of time as some exchanged require a short time period before funds can be moved.
			</p>
		</div>
		<div>
			<h3>3. How to mint your Martian:</h3>
			<p>
				The process of purchasing your Martian and having it verified as a Non-Fungible Token on the
				blockchain is called minting. Navigate to the tab labelled “Buy a martian” and connect your
				crypto wallet.I It is important to make sure your wallet is connected to the polygon network
				before minting. Navigate to the network section of your wallet and add the polygon chain if
				you have not already done so. The chain information can be found at
				https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/Input the
				required information found above. Once all is completed, press the mint Button.
			</p>
		</div>
		<div>
			<h3>4. What are gas Fees and Why am I being Charged them?</h3>
			<p>
				Just as it takes gas to power a car, it takes computing power to maintain the blockchain and
				deploy/execute the smart contracts that signify these images as non-fungible ERC721 tokens.
				We at the Miami Martian Club understand gas prices and have done our best to ensure you do
				not have to pay unreasonably high fees for gas. Ethereum Blockchain gas prices are high
				right now, so we decided to mint our collection on Polygon, an L2 branch of Ethereum with
				lower gas fees. Your Martian’s smart contract is still applicable across the Ethereum
				blockchain, but the gas fees cost you less. To get an estimation as to how much extra MATIC
				to purchase for the gas price, Head over to the Miami Martian Club discord server where you
				can see the gas prices in real time. Pssst… click the discord button to your left.
			</p>
		</div>
		<div>
			<h3>5. Once minted, Where can i find my martian?</h3>
			<p>
				Once Minted, your Martian will be transferred to your Metamask wallet. It may take a couple
				minutes, but your Martian can be found under the ”NFT” section of your Metamask wallet. You
				may also need to import your Martian. Open Metamask on your mobile device (this is
				important) and navigate to the NFT tab and click ”import NFT”. The address information can
				be found on our Opensea page and the token ID would be on your martian’s opensea profile.
				Just click the opensea icon to your left. For more questions concerning the storage of your
				Martian in your Metamask visit https://metamask.io
			</p>
		</div>
		<div>
			<h3>6. How to Access the martian DAO</h3>
			<p>
				Navigate to the drop down menu and select the “Enter DAO” button. Make sure your martian is
				in your wallet and your wallet is connected to the appropriate network. Our dao is hosted on
				Snapshot.org along with other notable DAOs such as OlympusDAO, Sushi and Decentraland.
			</p>
		</div>
		<div>
			<h3>7. After I mint my NFT, How do i see it?</h3>
			<p>
				After minting your martian, you may not see it immediately in your metamask wallet. Don’t
				worry, this is normal. The metamask browser extension does’nt even let you see your NFTs.
				Head over to opensea.io, connect your wallet and check in your “hidden” NFTs tab. They will
				be viewable there or in your “collected” section. To import them so that they are viewable
				on your mobile metamask wallet, navigate to “import NFT” within your metamask mobile app
				(make sure you are on the wallet account you minted from). Then input the contract address
				and token ID found in the details section of your NFT viewable in Opensea.
			</p>
		</div>
	</div>);
}

export default HowTo;
