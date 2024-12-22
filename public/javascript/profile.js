window.addEventListener("DOMContentLoaded", () => {
  const inputAvatar = document.querySelector("#input-avatar");
  const formContainer = document.querySelector("#form-container");
if(formContainer){
  formContainer.addEventListener("click", () => {
    inputAvatar.click();
  });
}
if(inputAvatar){
  inputAvatar.addEventListener("change", () => {
    formContainer.submit();
  });
}
});
