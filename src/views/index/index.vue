<template>
  <div class="index-style">
    <div>
      <el-descriptions
          class="margin-top"
          title="With border"
          :column="3"
          border
      >
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <user />
              </el-icon>
              用户名
            </div>
          </template>
          xhn
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <iphone />
              </el-icon>
              邮箱
            </div>
          </template>
          hain.xiao@outlook.com
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <location />
              </el-icon>
              地址
            </div>
          </template>
          南昌
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <tickets />
              </el-icon>
              Remarks
            </div>
          </template>
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <office-building />
              </el-icon>
              Address
            </div>
          </template>
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>

    </div>
  </div>
</template>
<script setup lang="ts">
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'



</script>
<style scoped>
.index-style {
  padding: 20px;
  margin-right: 15%;
  margin-left: 15%;
}
</style>