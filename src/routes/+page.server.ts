import api from "$lib/api";
import { error } from "@sveltejs/kit";

export const load = async () => {
  const res = await api("GET");

  if (res.status === 200) {
    return {
      hello: await res.json(),
    };
  }

  // handles unknown errors by rendering the nearest +error.svelte
  throw error(res.status);
};
