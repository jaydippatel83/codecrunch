import { WorldIDWidget, WidgetProps } from "@worldcoin/id";

function WorldCoin() {

  return (
    <div>
      <WorldIDWidget
        actionId="wid_staging_4581a48bcfc547e9e31c738f74faa777" // obtain this  
        signal="user-id-1"
        enableTelemetry='false'
        appName="candyApp"
        signalDescription="Receive initial airdrop April 2022"
        theme="light"
        debug='true' // DO NOT SET TO `true` IN PRODUCTION
        onSuccess={(result) => console.log(result)}
        onError={({ code, detail }) => console.log({ code, detail })}
        onInitSuccess={() => console.log("Init successful")}
        onInitError={(error) => console.log("Error while initialization World ID", error)} />
    </div>
  );
}

export default WorldCoin;