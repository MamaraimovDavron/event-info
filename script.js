const keys = document.getElementById("keys");

window.addEventListener("keydown", (e) => {
  keys.innerHTML = `
    <div class="key">
        <span>event.key</span>
        ${e.key == " " ? "Space" : e.key}
    </div>
    <div class="key">
        <span>event.keyCode</span>
        ${e.keyCode}
    </div>
    <div class="key">
        <span>event.code</span>
        ${e.code}
    </div>
  `;
});
