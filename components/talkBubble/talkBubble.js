import css from "./talkBubble.module.scss";

export default function TalkBubble({ children }) {
  return (
    <div className={css.talkBubble}>
      <div className={css.talkContent}>{children}</div>
    </div>
  );
}
