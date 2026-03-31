document.getElementById("fetchBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("/"); // backend route
    const text = await response.text();
    document.getElementById("message").textContent = text;
  } catch (err) {
    document.getElementById("message").textContent = "Error fetching backend.";
  }
});
