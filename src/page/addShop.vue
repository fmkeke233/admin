<template>
    <div>
        <head-top></head-top>
        <el-row style="margin-top: 20px">
            <el-col :span="12" :offset="4">
                <el-form
                    :model="formData"
                    :rules="rules"
                    ref="formData"
                    label-width="110px"
                    class="demo-formData"
                >
                    <el-form-item label="性别" prop="sex" required>
                        <el-select v-model="formData.sex">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="长度(0-1)" prop="len" required>
                        <el-input v-model="formData.len"></el-input>
                    </el-form-item>
                    <el-form-item label="直径(0-1)" prop="rdi" required>
                        <el-input v-model="formData.rdi"></el-input>
                    </el-form-item>
                    <el-form-item label="高度(0-1)" prop="hei" required>
                        <el-input v-model="formData.hei"></el-input>
                    </el-form-item>
                    <el-form-item label="全重(0-1)" prop="wei" required>
                        <el-input v-model="formData.wei"></el-input>
                    </el-form-item>
                    <el-form-item label="去壳重(0-1)" prop="exke_wei" required>
                        <el-input v-model="formData.exke_wei"></el-input>
                    </el-form-item>
                    <el-form-item label="内脏重(0-1)" prop="in_wei" required>
                        <el-input v-model="formData.in_wei"></el-input>
                    </el-form-item>
                    <el-form-item label="壳重(0-1)" prop="ke_wei" required>
                        <el-input v-model="formData.ke_wei"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age" required>
                        <el-input v-model="formData.age"></el-input>
                    </el-form-item>

                    <el-form-item class="button_submit">
                        <el-button type="primary" @click="submitForm()"
                            >立即添加</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import headTop from "@/components/headTop";
export default {
    data() {
        return {
            city: {},
            formData: {
                sex: "I",
            },
            rules: {},
            options: [
                {
                    value: "M",
                    label: "M",
                },
                {
                    value: "F",
                    label: "F",
                },
                {
                    value: "I",
                    label: "I",
                },
            ],
            categoryOptions: [],
        };
    },
    components: {
        headTop,
    },
    mounted() {},
    methods: {
        submitForm() {
            const data = {};
            Object.keys(this.formData).map((el) => {
                if (el === "sex") {
                    data[el] = this.formData[el];
                } else {
                    data[el] = parseInt(this.formData[el], 10) || 0;
                }
            });
            addOneAbalone(data).then((res) => {
                if (res.code === 200) {
                    this.$message({
                        message: "添加成功",
                        type: "success",
                    });
                    this.$router.push("/abalone");
                } else {
                    this.$message({
                        message: res.msg,
                        type: "error",
                    });
                }
            });
        },
    },
};
</script>

<style lang="less">
@import "../style/mixin";
.button_submit {
    text-align: center;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
}
.avatar {
    width: 120px;
    height: 120px;
    display: block;
}
.el-table .info-row {
    background: #c9e5f5;
}

.el-table .positive-row {
    background: #e2f0e4;
}
</style>
