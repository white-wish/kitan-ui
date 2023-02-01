import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Welcome to Kitan UI!</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Kitan~ UI",
  meta: [
    {
      name: "description",
      content:
        "A component library which radiance will vanquish twisted UI problems.",
    },
  ],
};
