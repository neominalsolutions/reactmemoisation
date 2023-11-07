import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import debounce from './debounce';

function DebouncingSample() {
	const [searchText, setSearchText] = useState<string>('');
	const [filteredData, setFilteredData] = useState<any[]>([]);

	const loadData = async () => {
		let response = await axios.get(
			`https://services.odata.org/northwind/northwind.svc/Products?$filter=substringof('${searchText}',ProductName)&$format=json`
		);

		// console.log('data', response.data.value);

		// load olduğunda filtered Data değerimi güncelle.
		setFilteredData([...response.data.value]);
	};

	useEffect(() => {
		// hep sayfanın ilk açılışında hemde searchText state değişiminde load et.
		loadData(); // arama işlemlerinde de serverside load et
	}, [searchText]);

	const onInputSearch = (event: any) => {
		setSearchText(event.target.value);
	};

	const searchDebounceHandler = useMemo(
		() => debounce(onInputSearch),
		[searchText]
	);

	return (
		<>
			<input type="text" onChange={searchDebounceHandler} />
			<hr></hr>
			{filteredData && (
				<ul>
					{filteredData.map((item) => {
						return <li key={item.ProductID}>{item.ProductName}</li>;
					})}
				</ul>
			)}
		</>
	);
}

export default DebouncingSample;
