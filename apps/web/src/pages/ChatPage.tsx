import { useParams } from "react-router-dom";

export function ChatPage() {
  const { conversationId } = useParams();

  return (
    <section>
      <h1>Chat</h1>
      <p>Conversation ID: {conversationId}</p>
      <div className="chat-window card">
        <div className="message incoming">Hey, want to team up?</div>
        <div className="message outgoing">Sure, let's chat details.</div>
      </div>
    </section>
  );
}

