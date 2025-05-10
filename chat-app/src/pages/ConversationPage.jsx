import CaseDetails from "../components/CaseDetails";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";
import { useEffect, useState } from "react";
import { fetchConversation, sendMessage } from "../api/messages";

function ConversationPage() {

    const [caseInfo, setCaseInfo] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchConversation(1)
            .then(data => {
                setCaseInfo({
                    title: data.conversation.title || "Conversation",
                    productName: data.conversation.product_name,
                    caseId: data.conversation.case_id,
                    createAt: data.conversation.created_at,
                    lastUpdate: data.conversation.last_updated
                });
                setMessages(data.messages);
            })
            .catch(err => console.error(err));
    }, []);

      const handleSendMessage = async (text) => {
        try {
            const result = await sendMessage(1, text); // conversation id 1
            setMessages((prev) => [...prev, result.userMessage, result.botReply]);
        } catch (error) {
            console.error(error);
        }
    };

    if (!caseInfo) return <div>Loading conversation...</div>;

    return (
        <main className="main">
            <div className="top">
                <CaseDetails caseInfo={caseInfo} />
            </div>
            <div className="messages-display">
                <MessageList messages={messages} />
            </div>
            <div className="messages-sender">
                <MessageInput onSend={handleSendMessage} />
            </div>
        </main>
    );
}
export default ConversationPage;