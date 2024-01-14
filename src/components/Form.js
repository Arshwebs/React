import {useState} from "react";

const Form = ({handleNewItems}) => {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	const arrayLength = 20;

	function handleSubmit(e) {
		e.preventDefault();
		if (!description) return;
		const newItem = {description, quantity, packed: false, id: Math.floor(Math.random() * 1000)};
		console.log(newItem);
		handleNewItems(newItem);
	}
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>💼 what do you your trip?</h3>
			<select value={quantity} onChange={e => setQuantity(parseInt(e.target.value))}>
				{Array.from(
					{length: arrayLength},
					(
						_,
						i //_ is current value i is index
					) => i + 1
				).map(value => (
					<option value={value} key={value}>
						{value}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="item..."
				value={description}
				onChange={e => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
};

export default Form;
