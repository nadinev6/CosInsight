// Chat
document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const sendButton = document.getElementById("sendButton");


    // Chat Box Send Button Click Handler
    sendButton.addEventListener("click", function() {
        const message = chatInput.value.trim();
        if (message !== "") {
            addUserMessage(message);
            // Simulate a bot response (replace with your chatbot logic)
            setTimeout(function() {
                addBotMessage("Simulated bot response: " + message);
            }, 1000); // Simulate a 1-second delay
            chatInput.value = "";
        }
    });

    function addUserMessage(message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", "user-message");
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addBotMessage(message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", "bot-message");
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});