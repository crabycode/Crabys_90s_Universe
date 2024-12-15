document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("guestbook");
    const messagesContainer = document.getElementById("messages-container");
    const loadMessages = () => {
        const savedMessages = JSON.parse(localStorage.getItem("guestbookMessages")) || [];
        messagesContainer.innerHTML = savedMessages.length>0
            ? savedMessages.map(message => `<p><strong>${message.name}:</strong> ${message.text}</p>`).join("")
            : "<p>No messages yet. Be the first to sign!</p>";
    };
    const saveMessage = (name, text) => {
        const messages = JSON.parse(localStorage.getItem("guestbookMessages")) || [];
        messages.push({name, text});
        localStorage.setItem("guestbookMessages", JSON.stringify(messages));
    };
    form.addEventListener("submit",(event) => {
        event.preventDefault();
        const nameInput = document.getElementById("name");
        const messageInput = document.getElementById("message");
        const name = nameInput.value.trim();
        const text = messageInput.value.trim();
        if (name && text) 
        {
            saveMessage(name, text);
            loadMessages();
            form.reset();
        } 
        else 
        {
            alert("Please fill in both fields before submitting.");
        }
    });
    loadMessages();
});