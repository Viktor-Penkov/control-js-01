let string = "Curabitur ligula sapien, tincidunt non."
const formatString = function (string) {
    if (string.length>=40 ){
        let newString = string.slice(0,39)
        string = newString + "..."

    }
    return string
    
  };
  console.log(formatString(string));
  string = "Vestibulum facilisis, purus nec pulvinar iaculis."
  console.log(formatString(string));
  string = "Curabitur ligula sapien."
  console.log(formatString(string));
 