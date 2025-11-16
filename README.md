# Next.js Cloudflare Starter

[English](#english)

一键部署，无需配置，支持多环境（dev / prod）Worker 部署。

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

#### 部署开发环境

```bash
pnpm run deploy:dev
```

#### 部署生产环境

```bash
pnpm run deploy:prod
```

---

## English

Deploy with one click, zero configuration, supports multi-environment (dev / prod) Cloudflare Workers.

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

#### Configure Cloudflare credentials

```bash
pnpm alchemy configure
pnpm alchemy login
```

#### Deploy to development

```bash
pnpm run deploy:dev
```

#### Deploy to production

```bash
pnpm run deploy:prod
```
