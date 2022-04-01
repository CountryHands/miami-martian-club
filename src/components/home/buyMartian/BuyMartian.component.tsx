import React, {useState, RefObject} from 'react';
import './BuyMartian.scss';
interface BuyMartianProps {
    refToUse: RefObject<HTMLDivElement>
}

function BuyMartian({refToUse}:BuyMartianProps) {
  const [amount, setAmount] = useState<number>(1)
  
  const decrement = () => {
	  if (amount > 1) {
		  setAmount(amount - 1)
	  }
  }
  const increment = () => {
	setAmount(amount + 1)
  }
  const mintMartians = () => {
	console.log("This Would Trigger The Buy Function")
  }
  return (
	 <div ref={refToUse} id='buy-martian' className="card buy-martian">
		<h2>
			<span>
				Buy&nbsp;
			</span>
			Martian
		</h2>
		<div>
			<h3>How Many Would You Like To Buy</h3>
			<div className='buttons'>
				<button className="btn red" type='button' onClick={() => decrement()} disabled={amount < 2}>-</button>
				<button className="btn teal" type="button" onClick={() => mintMartians()}>Mint {amount} Martian</button>
				<button className="btn green" type='button' onClick={() => increment()}>+</button>
			</div>
		</div>
	</div>
  );
}

export default BuyMartian;
