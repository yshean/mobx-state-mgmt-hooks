export default () => {
  // note the use of this which refers to observable instance of the store
  return {
    friends: [{ name: "Myself", isFavourite: true, isSingle: false }],
    makeFriend(name, isFavourite = false, isSingle = false) {
      const oldFriend = this.friends.find(friend => friend.name === name);
      if (oldFriend) {
        oldFriend.isFavourite = isFavourite;
        oldFriend.isSingle = isSingle;
      } else {
        this.friends.push({ name, isFavourite, isSingle });
      }
    },
    get singleFriends() {
      return this.friends.filter(friend => friend.isSingle);
    }
  };
};
