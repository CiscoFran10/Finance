/* Desenvolva sua lógica aqui */

function modal() {
	const modalButtons = document.querySelectorAll(
		"[data-control-modal='insert-value']"
	);

	modalButtons.forEach((btn) => btn.addEventListener("click", handleModal));

	function handleModal(e) {
		const modalId = e.target.getAttribute("data-control-modal");
		const modalContainer = document.getElementById(modalId);

		modalContainer.classList.toggle("active");
	}
}
modal();
