const generateUniqueId = () => {
    const timestamp = Date.now();
    return timestamp.toString();
}

export default generateUniqueId;

