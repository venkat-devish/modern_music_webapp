export const greet = () => {
  const curr_date = new Date();
  const hrs = curr_date.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return greet;
};

export const overflowDelimiter = (text, type) => {
  let limitedText;
  switch (type) {
    case "title":
      limitedText = text.length < 14 ? text : text.substring(0, 12) + "...";
      break;

    case "cover":
      console.log(text);
      limitedText = text.length < 12 ? text : text.substring(0, 7) + "...";
      break;

    default:
      break;
  }

  return limitedText;
};
