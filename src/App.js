import {useState} from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
	const [items, setItems] = useState([]);
	function handleNewItems(newItem) {
		setItems(item => [...items, newItem]);
	}
	function handleDeleteItem(id) {
		setItems(items => items.filter(item => item.id !== id));
	}
	function handleToggleItem(id) {
		setItems(items => items.map(item => (item.id === id ? {...item, packed: !item.packed} : item)));
	}
	function handleClearList() {
		if (items.length === 0) {
			window.alert("No items available");
		} else {
			const confirmed = window.confirm("Are you sure to delete all");

			if (confirmed) setItems([]);
		}
	}
	return (
		<div>
			<Logo />
			<Form handleNewItems={handleNewItems} />
			<PackingList
				items={items}
				handleDeleteItem={handleDeleteItem}
				handleToggleItem={handleToggleItem}
				handleClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}

export default App;
