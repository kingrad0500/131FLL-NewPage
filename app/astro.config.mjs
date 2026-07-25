// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: {
    /*
     * Bind IPv4 loopback explicitly. The default binding resolves to IPv6
     * [::1] only, which browsers that resolve "localhost" to 127.0.0.1 cannot
     * reach — the dev server appears dead even though it is running.
     */
    host: "127.0.0.1",
    port: 4321,
  },
});
