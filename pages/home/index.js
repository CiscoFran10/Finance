/* Desenvolva sua lógica aqui */

const valuesCategory = ["Entrada", "Saída"];

let insertedValues = [];

function generateList(array) {
	const financeList = document.querySelector("[data-finance='list']");

	return (financeList.innerHTML = array
		.map((item) => {
			let { id, value, categoryID } = item;

			return (listItem = `<li class="finance-list-item" id="${id}">
			<span data-finance="value" class="text-1-md flex-1">R$ ${value},00</span>
		<h2 class="text-2 category"">${valuesCategory[categoryID]}</h2>
		<button data-finance="remove" class="btn"></button>
		</li>`);
		})
		.join(" "));
}

update();

function update() {
	updateTotal();
	deleteItens();
}

function deleteItens() {
	const deleteButtons = document.querySelectorAll("[data-finance='remove']");
	deleteButtons.forEach((btn) => btn.addEventListener("click", handleDelete));

	function handleDelete() {
		const itemId = this.parentElement.getAttribute("id");
		this.parentElement.remove();

		insertedValues.filter((item) => {
			if (item.id === +itemId) {
				insertedValues.splice(insertedValues.indexOf(item), 1);
				update();
			}
		});
	}
}

function addNewItem() {
	const modalContainer = document.querySelector(".modal-container");
	const modalInput = document.getElementById("value");
	const radioButtons = document.querySelectorAll("input[name='valueType']");
	const filterButtons = document.querySelectorAll("[data-filter] .btn");
	const registerButton = document.querySelector(
		"[data-control-modal='send-value']"
	);

	registerButton.addEventListener("click", handleRegister);

	function handleRegister(e) {
		e.preventDefault();

		filterButtons.forEach((btn) => btn.classList.remove("active"));
		filterButtons[0].classList.add("active");

		let itemValue = +modalInput.value;

		let radioSelected = 0;

		radioButtons.forEach((btn) => {
			if (btn.checked) {
				radioSelected = +btn.value;
			}
		});

		let newItem = {
			id: insertedValues.length,
			value: itemValue,
			categoryID: radioSelected,
		};

		insertedValues.push(newItem);
		generateList(insertedValues);

		update();

		modalContainer.classList.remove("active");
	}
}
addNewItem();
