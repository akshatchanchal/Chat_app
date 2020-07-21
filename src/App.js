import React from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";

const chatClient = new StreamChat("3gvr3dckq4jx");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicGxhaW4tZGV3LTEifQ.dMaDnVJ1I8CV-4_PJptEG7jhQASSgNukCcVjvn3Gwok";

chatClient.setUser(
  {
    id: "plain-dew-1",
    name: "Plain dew",
    image: "https://getstream.io/random_png/?id=plain-dew-1&name=Plain+dew"
  },
  userToken
);

const channel = chatClient.channel("messaging", "godevs", {
  // add as many custom fields as you'd like
  image:
    "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
  name: "Talk about Go"
});

const App = () => (
  <Chat client={chatClient} theme={"messaging light"}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
