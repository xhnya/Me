<template>
  <div class="index-style">
    <h1>个人简介</h1>
    <p>我是一枚全栈开发者</p>
    <p>邮箱: <a href="mailto:hain.xiao@outlook.com">hain.xiao@outlook.com</a></p>

    <h2>技术栈</h2>
    <div class="tech-stack">
      <h3>前端</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Vue</li>
        <li>Node.js</li>
      </ul>

      <h3>后端</h3>
      <ul>
        <li>Java</li>
        <li>SpringBoot, SpringMVC, MyBatis</li>
        <li>SpringCloud, SpringCloudAlibaba, Dubbo, Zookeeper</li>
        <li>MySQL</li>
      </ul>

      <h3>中间件</h3>
      <ul>
        <li>RabbitMQ</li>
        <li>Redis</li>
        <li>Elasticsearch</li>
        <li>Nginx</li>
        <li>Docker</li>
      </ul>
    </div>

    <h2>开源项目</h2>
    <div class="projects">
      <h3>游戏社区</h3>
      <p>
        后端代码 <a href="https://github.com/xhnya/light" target="_blank">点击跳转</a> |
        前端代码 <a href="https://github.com/xhnya/light-front" target="_blank">点击跳转</a> |
        后台管理代码 <a href="https://github.com/xhnya/light-admin" target="_blank">点击跳转</a>
      </p>
      <p>项目描述：light是一个游戏社区，采用SpringCloud & Alibaba, SpringBoot 2.3, Mybatis, Elasticsearch, Docker等核心技术，提供了前台，管理后台页面。集成了注册中心，配置中心，链路追踪，网关。第三方服务：阿里云OSS, 阿里云短信验证码, 阿里云视频点播, 邮件服务。</p>

      <h3>博客</h3>
      <p>
        代码 <a href="https://github.com/xhnya/blog" target="_blank">点击跳转</a><br>
        使用技术：SpringBoot, Mybatis, MySQL, thymeleaf
      </p>

      <h3>健身APP</h3>
      <p>
        代码 <a href="https://gitee.com/xhnya/exercise" target="_blank">点击跳转</a><br>
        使用技术 UniApp, Vue, Node.js
      </p>
    </div>

    <h2>项目经验</h2>
    <div class="projects">
      <h3>教育网</h3>
      <p>
        项目描述：教育网是一个教育类网站，采用SpringBoot, Mybatis, MySQL等技术，提供了前台，管理后台页面。集成了注册中心，配置中心，链路追踪，网关。包括了OSS文件上传，短信验证码, 阿里云视频点播等功能。
      </p>

      <h3>QQ邮箱测试项目</h3>
      <p>
        使用python+selenium编写的自动化测试项目，实现了QQ邮箱的登录，发送邮件，查看邮件等功能。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 这里可以添加任何需要的 TypeScript 逻辑，目前不需要额外的逻辑
</script>

<style scoped>
.index-style {
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.index-style h1, .index-style h2, .index-style h3 {
  color: #333;
  margin-top: 20px;
  margin-bottom: 10px;
}

.index-style p {
  color: #666;
  line-height: 1.5;
  margin-bottom: 10px;
}

.index-style ul {
  color: #666;
  line-height: 1.5;
  list-style-type: disc;
  margin: 0 0 10px 20px;
}

.index-style a {
  color: #007bff;
  text-decoration: none;
}

.index-style a:hover {
  text-decoration: underline;
}

.tech-stack, .projects {
  margin-bottom: 20px;
}
</style>
