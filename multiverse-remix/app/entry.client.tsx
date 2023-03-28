import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function hydrate() {
  const client = new ApolloClient({
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    uri: `${"https://multiverse-dev-directus.ov3mip.easypanel.host"}/graphql`, // the same uri in our entry.server file
  });
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <ApolloProvider client={client}>
          <RemixBrowser />
        </ApolloProvider>
      </StrictMode>
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
