let message = "Latest technology news"
const checkForSpam = function (message) {
    message = message.toLowerCase()
    let res;
    if (message.includes("spam") || message.includes("sale")) {
        res = "true"
        
    }
    else {res = "false"}
    return res
    
    };
    console.log(checkForSpam(message));
    message = "JavaScript weekly newsletter"
    console.log(checkForSpam(message))
    message = "Get best sale offers now!"
    console.log(checkForSpam(message));
    console.log(checkForSpam("[SPAM] How to earn fast money?"));
    