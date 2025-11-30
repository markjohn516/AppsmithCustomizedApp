export default {
	init() {
		data.items = data.dummyItems;
	},
	updateItem(id, item) {
		if (data.items[id]) {
			data.items[id] = { ...data.items[id], ...item };
		} else {
			data.items[id] = { ...data.items[id], ...item };
			console.warn(`updateItem: No item found at index ${id}`);
		}
	},
	addItem(itemName) {
		this.updateItem(data.items.length, itemName);
	}
}