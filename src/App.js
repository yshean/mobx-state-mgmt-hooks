import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { useStore } from "./stores";

const FriendMaker = observer(() => {
  const { friendStore } = useStore();
  const [name, setName] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);
  const [isSingle, setIsSingle] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    friendStore.makeFriend(name, isFavourite, isSingle);
  };

  return (
    <form onSubmit={onSubmit}>
      Total friends: {friendStore.friends.length}
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <input
        type="checkbox"
        value={isFavourite}
        onChange={e => setIsFavourite(e.target.value)}
      />
      <input
        type="checkbox"
        value={isSingle}
        onChange={e => setIsSingle(e.target.value)}
      />
      <button type="submit">Add friend</button>
    </form>
  );
});

const FriendList = observer(() => {
  const { friendStore } = useStore();

  return (
    <div>
      {friendStore.friends.map(f => (
        <span>{f.name}</span>
      ))}
    </div>
  );
});

const App = () => {
  return (
    <div>
      <FriendMaker />
      <FriendList />
    </div>
  );
};

export default App;
