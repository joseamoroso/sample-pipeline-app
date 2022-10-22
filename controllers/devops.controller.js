exports.devopsGetMessage = function (receiver) {
  try {
    if (!receiver) {
      return null;
    }
    return "Hello " + receiver + " your message will be send";
  } catch (err) {
    console.log(err)
  }
};
