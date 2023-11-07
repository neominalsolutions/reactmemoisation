import React, { memo } from 'react';

// bu componente özgü value yada referans type için type kullanımıu yaygındır
// inteface apidan çekilecek verilen ekran basılması amaçlı tercih edilir.
// string literal types
type foreColor = 'red' | 'white' | 'blue';

type HeaderProps = {
	title: string;
};

// componente dışarıdan gönderilen attribute değerleri
function HeaderSample(props: HeaderProps) {
	return <>{props.title}</>;
}

// title değişmediği süre boyunca gereksiz render almayı ortadan kaldırdık.
function Header({ title }: HeaderProps) {
	// const color: foreColor = 'purple';

	console.log('... rendering');
	return (
		<div>
			<p>{title}</p>
		</div>
	);
}

export default memo(Header);
