# Next.js Cloudflare Starter

[English](#english)

一键部署 Next.js 到 Cloudflare Worker，无需配置，支持多环境（dev / prod）Worker 部署。

### 快速开始

#### 克隆项目

```bash
git clone https://github.com/nshen/next-cloudflare-starter.git
cd next-cloudflare-starter
```

#### 安装依赖

```bash
pnpm install
```

#### 本地开发

```bash
pnpm dev
```

### 部署

#### 给 Cloudflare 权限

```bash
pnpm alchemy configure
pnpm alchemy login
```

#### 部署开发环境 Worker

```bash
pnpm run deploy:dev
```

#### 删除开发环境 Worker 

```base
pnpm run destroy:dev
```

#### 部署生产环境 Worker

```bash
pnpm run deploy:prod
```

#### 删除生产环境 Worker

```base
pnpm run destroy:prod
```

---

## English

Deploy Next.js to Cloudflare Worker with one click, zero configuration required. Supports multi-environment (dev / prod) Worker deployment.

### Quick Start

#### Clone the repository

```bash
git clone https://github.com/nshen/next-cloudflare-starter.git
cd next-cloudflare-starter
```

#### Install dependencies

```bash
pnpm install
```

#### Local development

```bash
pnpm dev
```

### Deployment

#### Grant Cloudflare permissions

```bash
pnpm alchemy configure
pnpm alchemy login
```

#### Deploy development Worker

```bash
pnpm run deploy:dev
```

#### Remove development Worker

```bash
pnpm run destroy:dev
```

#### Deploy production Worker

```bash
pnpm run deploy:prod
```

#### Remove production Worker

```bash
pnpm run destroy:prod
```
