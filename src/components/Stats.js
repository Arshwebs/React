const Stats = ({items}) => {
	if (!items.length)
		return (
			<footer className="stats">
				<em>🏖️ Start adding some items</em>
			</footer>
		);
	const numOfItems = items.length;
	const packedItems = items.filter(item => item.packed).length;
	const percentage = Math.round((packedItems / numOfItems) * 100);
	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? "✈️You got everything! you can go"
					: `
				You have ${numOfItems} items on your list, and you already packed ${packedItems} (${percentage}%)
			`}
			</em>
		</footer>
	);
};

export default Stats;
