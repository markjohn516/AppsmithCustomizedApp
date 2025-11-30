export default {
	init() {
		data.items = data.dummyItems;
	},
	updateItem(id, item) {
		if (data.items[id]) {
			data.items[id] = { ...data.items[id], ...item };
		} else {
			console.warn(`updateItem: No item found at index ${id}`);
		}
	},
	addItem(itemName) {
		data.items.push({ itemName, available: true });
	}
}