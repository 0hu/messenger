const messages = [
  {
    user: "other",
    text: "hi"
  },
  {
    user: "my",
    text: "bye"
  },
  {
    user: "other",
    text: "wtf"
  }
];

const handleSendMessage = text => {
  if (!text) {
    return;
  }

  messages.push({
    user: "my",
    text
  });

  render();
};

const renderMessages = () => {
  return messages
    .map(
      message => `
    <div class="${message.user}-message">
      ${message.text}
    </div>
  `
    )
    .join("");
};

const render = () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="messages">
      ${renderMessages()}
    </div>
    <div class="input-form">
      <input type="text" />
      <button>Send</button>
    </div>
  `;

  app.querySelector("button").addEventListener("click", () => {
    const text = app.querySelector("input").value;
    handleSendMessage(text);
  });
};

render();
