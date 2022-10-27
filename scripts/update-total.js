function updateTotal() {
	const financeTotal = document.querySelector("[data-finance='total']");
	const itensValue = document.querySelectorAll("[data-finance='value']");
	const empty = document.querySelector(".empty");

	let totalValue = 0;

	itensValue.forEach((item) => {
		totalValue += +item.innerHTML.replace("R$", "").replace(",", ".");
	});

	financeTotal.innerHTML = totalValue.toLocaleString("pt-br", {
		style: "currency",
		currency: "BRL",
	});

	if (insertedValues.length > 0) {
		empty.classList.add("hide");
	} else {
		empty.classList.remove("hide");
	}
}
