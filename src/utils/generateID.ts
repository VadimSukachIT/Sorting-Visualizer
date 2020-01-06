const generateID = () => {
    return `f${(~~(Math.random() * 1e8)).toString(16)}`;
};

export default generateID;