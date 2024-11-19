# 使用 Node.js 官方镜像
FROM node:22-alpine

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 复制配置文件
COPY pnpm-lock.yaml package.json ./

# 复制项目代码到容器
COPY . .

# 安装所有依赖
RUN pnpm install

# 构建 Next.js 应用
RUN pnpm build || (cat /app/.next/trace && exit 1)

# 删除开发依赖，仅保留生产依赖
RUN pnpm prune --prod

# 暴露运行端口
EXPOSE 3000

# 启动应用
CMD ["pnpm", "start"]
