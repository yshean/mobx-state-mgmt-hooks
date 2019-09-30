import axios from "axios";

export default () => {
  return {
    isLoading: false,
    userList: [],
    error: null,
    isSubmitting: false,
    loadUsers() {
      this.isLoading = true;
      axios
        .get("http://example.com/users")
        .then(_result => {
          this.userList = _result.data.slice(-10);
        })
        .catch(_error => (this.error = _error.message))
        .finally(() => (this.isLoading = false));
    },
    addUser(args) {
      this.isSubmitting = true;
      axios
        .post("http://example.com/users", { email: args.email })
        .then(_result => {
          console.log("Added successfully");
          this.userList = this.userList.concat(_result.data);
        })
        .catch(_error => (this.error = _error.message))
        .finally(() => (this.isSubmitting = false));
    }
  };
};
