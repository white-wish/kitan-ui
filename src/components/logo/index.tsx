import { component$ } from "@builder.io/qwik";
import { logo } from "./logo.css";

export default component$(() => {
  return (
    <div class={logo}>
      <span>Kitan UI</span>
      <span>"キタ—ン"</span>
    </div>
  );
});
