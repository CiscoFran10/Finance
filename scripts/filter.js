function filter() {
	const filterButtons = document.querySelectorAll("[data-filter] .btn");

	filterButtons[0].classList.add("active");

	filterButtons.forEach((btn) => btn.addEventListener("click", handleFilter));

	function handleFilter() {
		filterButtons.forEach((btn) => btn.classList.remove("active"));

		this.classList.add("active");

		const filterId = this.getAttribute("id");

		let insertedValuesFiltered = generateList(
			insertedValues.filter(
				(item) => item.categoryID === +filterId || filterId === "all"
			)
		);
		update();
	}
}
filter();
