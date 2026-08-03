import { PropsWithChildren } from "react";

export default function Html({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta
          name="description"
          content="Back to Athlete helps former athletes regain strength, confidence, and athleticism with workouts under 45 minutes."
        />
        <meta name="theme-color" content="#07111f" />
        <title>Back to Athlete</title>
        <style
          id="expo-reset"
          dangerouslySetInnerHTML={{
            __html: "#root,body,html{height:100%}body{overflow:hidden}#root{display:flex}"
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
