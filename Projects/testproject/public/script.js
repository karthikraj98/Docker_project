async function loadInfo() {
  const res = await fetch("/api/info");
  const data = await res.json();

  document.getElementById("output").innerHTML = `
    <b>Hostname:</b> ${data.hostname}<br>
    <b>Platform:</b> ${data.platform}<br>
    <b>Uptime:</b> ${data.uptime}<br>
    <b>Time:</b> ${data.time}
  `;
}

async function loadQuote() {
  const res = await fetch("/api/quote");
  const data = await res.json();

  document.getElementById("output").innerHTML = `
    <b>Quote:</b> "${data.quote}"
  `;
}
