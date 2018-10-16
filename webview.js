module.exports = (Franz) => {
  const getMessages = function getMessages() {
    Franz.setBadge(document.querySelectorAll('.yrs5ff').length/2);
  };

  Franz.loop(getMessages);
};
