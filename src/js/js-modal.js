(() => {
  const refs = {
    openModalBtn1: document.querySelectorAll("[data-modal-open-one]"),
    // openModalBtn2: document.querySelectorAll("[data-modal-open-two]"),
    closeModalBtn1: document.querySelector("[data-modal-close1]"),
    // closeModalBtn2: document.querySelector("[data-modal-close2]"),
    modal1: document.querySelector("[data-modal1]"),
    // modal2: document.querySelector("[data-modal2]"),
  };

  refs.openModalBtn1.forEach((item) =>
    item.addEventListener("click", toggleModal1)
  );

  // refs.openModalBtn2.forEach((item) =>
  //   item.addEventListener("click", toggleModal2)
  // );

  refs.closeModalBtn1.addEventListener("click", toggleModal1);
  // refs.closeModalBtn2.addEventListener("click", toggleModal2);

  function toggleModal1() {
    refs.modal1.classList.toggle("is-hidden");
  }

  // function toggleModal2() {
  //   refs.modal2.classList.toggle("is-hidden");
  // }
})();
