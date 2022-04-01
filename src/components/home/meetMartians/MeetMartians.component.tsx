import React, {useState, useEffect} from 'react';
import './MeetMartians.scss';

import martian8 from '../../../images/8.png'
import martian35 from '../../../images/35.png'
import martian66 from '../../../images/66.png'
import martian312 from '../../../images/312.png'
import martian14 from '../../../images/14.png'
import martian53 from '../../../images/53.png'
import martian174 from '../../../images/174.png'
import martian203 from '../../../images/203.png'
import martian1873 from '../../../images/1873.png'
import martian573 from '../../../images/573.png'
import martian492 from '../../../images/492.png'
import martian577 from '../../../images/577.png'


const INIT_IMAGES : string[] = [
	martian8,
	martian35,
	martian66,
	martian312,
	martian14,
	martian53,
	martian174,
	martian203,
	martian1873,
	martian573,
	martian492,
	martian577
];

function MeetMartians() {
	const [arrayOfNftImages, setArrayOfNftImages] = useState<string[]>(INIT_IMAGES)

	useEffect(() => {
		const sleep = (ms: number) => {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
		const nextSlide = async () => {
			const tempArray: string[] = [...arrayOfNftImages]
			if (tempArray.length > 0) {
				const e = tempArray.shift();
				if (e) {
					tempArray.push(e)
					sleep(300).then(s => setArrayOfNftImages(tempArray))
				}
			}
		}
		nextSlide()
	}, [arrayOfNftImages])
	
	return (
		<div className='card meet'>
			<h2><span>Meet </span>the <span>Miami</span> Martians</h2>
			<div>
				<img src={arrayOfNftImages ? arrayOfNftImages[0] : ''} alt=""/>
			</div>
		</div>
	);
}

export default MeetMartians;
