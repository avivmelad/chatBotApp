const API_URL = "http://localhost:5000";

export async function fetchConversation(id) {
    const response = await fetch(`${API_URL}/conversations/${id}`);
    if (!response.ok) throw new Error("Failed to fetch conversation");
    return await response.json();
}

export async function sendMessage(conversationId, text) {
    const response = await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            conversation_id: conversationId,
            text,
            is_user: true
        })
    });
    if (!response.ok) throw new Error("Failed to send message");
    return await response.json();
}