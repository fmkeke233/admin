export const handleResponse = (response, successMsg, errorMsg) => {
    if (res.code) {
        successMsg &&
            this.$message({
                message: successMsg,
                type: 'success'
            })
        return res
    } else {
        this.$message({
            message: errorMsg || '操作失败',
            type: 'error'
        })
        return res
    }
}
