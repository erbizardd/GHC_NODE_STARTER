exports.readFile = (file) => {
    
    const fileSplited = file.split("\n");
    const meta = fileSplited[0].split(" ").map((item) => {
        return parseInt(item, 10);
    })
    const info1 = fileSplited[1].split(" ").map((item) => {
        return parseInt(item, 10);
    })
    const info2 = meta[1];

    return {meta, info1, info2};
}
    