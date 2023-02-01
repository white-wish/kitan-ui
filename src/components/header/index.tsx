import { component$ } from "@builder.io/qwik";
import Logo from "../logo";

export default component$(() => {
  return (
    <header>
      <Logo />
    </header>
  );
});
