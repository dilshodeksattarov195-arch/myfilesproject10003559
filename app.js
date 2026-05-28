const productSenderConfig = { serverId: 7134, active: true };

const productSenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_7134() {
    return productSenderConfig.active ? "OK" : "ERR";
}

console.log("Module productSender loaded successfully.");