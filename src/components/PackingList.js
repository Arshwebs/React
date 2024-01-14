import {useState} from "react";

const Item = ({item, handleDelete, handleToggleItem}) => {
	return (
		<li>
			<input
				type="checkbox"
				onChange={() => {
					handleToggleItem(item.id);
				}}
			/>
			<span style={item.packed ? {textDecoration: "line-through"} : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => handleDelete(item.id)}>❌</button>
		</li>
	);
};

const PackingList = ({items, handleDeleteItem, handleToggleItem, handleClearList}) => {
	const [sortBy, setSortBy] = useState("input");
	let sortedItems;
	if (sortBy === "input") sortedItems = items;
	if (sortBy === "description")
		sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
	if (sortBy === "packed")
		sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
	return (
		<div className="list">
			<ul>
				{sortedItems.map(item => (
					<Item
						item={item}
						handleDelete={handleDeleteItem}
						key={item.id}
						handleToggleItem={handleToggleItem}
					/>
				))}
			</ul>
			<div className="actions"></div>
			<select value={sortBy} onChange={e => setSortBy(e.target.value)}>
				<option value="input">sort by input order</option>
				<option value="description">sort by description</option>
				<option value="packed">sort by packed status</option>
			</select>
			<button onClick={handleClearList}>Clear List</button>
		</div>
	);
};

export default PackingList;
