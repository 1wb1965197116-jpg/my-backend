document.getElementById('fetch').addEventListener('click', async () => {
  try {
    const res = await fetch('https://my-backend-1-8mtf.onrender.com/api/tamper');
    const scripts = await res.json();
    document.getElementById('output').textContent = JSON.stringify(scripts, null, 2);
  } catch (err) {
    document.getElementById('output').textContent = 'Error fetching scripts: ' + err;
  }
});
