import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { getWebsiteBaseHref } from '@collo/ui-utils';
import { GLADIOLUS_TOURS_ROUTE_TABLE } from './route-table';
import { GtNotification } from '@collo/ui-comp-notifications';
import {
  WhatsAppChatButton,
  WhatsAppChatButtonRecipient,
} from '@collo/ui-comp-chat-on-whatsapp';
import React from 'react';

// See https://medium.com/doctolib/react-query-cachetime-vs-staletime-ec74defc483e
// * cacheTime default is 5 mins
// * staleTime default is 0 mins
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // never refetch on window focus
      retry: false, // otherwise by default will retry errors up to 3 times
    },
  },
});

export function UiRouterGladiolusTours() {
  const router = createBrowserRouter(GLADIOLUS_TOURS_ROUTE_TABLE, {
    basename: getWebsiteBaseHref(),
  });

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <GtNotification />
        <RouterProvider router={router} />
        <WhatsAppChatButton
          size="medium"
          theme="green"
          recipient={WhatsAppChatButtonRecipient.GTTZ}
        />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
