export const displayFancyLogs = () => {
  console.log(
    "%c  ____  _           _     _       ____                          _\n / ___|| |__  _   _| |__ | |__   |  _ \\ ___  _ ____      ____ _| |\n \\___ \\| '_ \\| | | | '_ \\| '_ \\  | |_) / _ \\| '__\\ \\ /\\ / / _` | |\n  ___) | | | | |_| | |_) | | | | |  __/ (_) | |   \\ V  V / (_| | |\n |____/|_| |_|\\__,_|_.__/|_| |_| |_|   \\___/|_|    \\_/\\_/ \\__,_|_|\n",
    "color: #6b17e8;"
  );

  console.log(
    "%c Hope you like what you see :)",
    "color: #6b17e8; padding: 6px;"
  );

  // Easter egg hint
  console.log(
    "%c 💡 Psst! There's a secret hiding in plain sight. Follow your heart, it might lead to something... interesting.",
    "color: #6b17e8; font-style: italic; padding: 6px;"
  );
};
