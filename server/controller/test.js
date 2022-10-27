module.exports = {
    // [GET] /airport?query={query} 요청을 수행합니다.
    // 공항 이름 자동완성 기능을 수행합니다!
    findAll: (req, res) => {
        res.send("test");
    },
    approve: async (req, res) => {
        res.send("test_approve");
    }
}