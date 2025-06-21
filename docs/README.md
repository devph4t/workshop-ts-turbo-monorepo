# Workshop TS Turbo Monorepo

A monorepo setup for TypeScript projects using [pnpm](https://pnpm.io/), supporting multiple apps and packages.

---

## 📦 Getting Started

### 1. Install Dependencies

```sh
pnpm install
```

### 2. Create a New Project

#### Next.js App

> Replace `your-app-name` and `your-api-name` with your desired project names.

```sh
pnpm dlx create-next-app@latest ./apps/web/your-app-name
```

#### Hono App

```sh
pnpm create hono@latest ./apps/api/your-api-name
```

#### Create Vue app:

```sh
pnpm create vue@latest ./apps/web/your-app-name
```

#### Create Vite app:

```sh
pnpm create vite@latest ./apps/web/your-app-name
```

#### Create React app:

```sh
pnpm create react-app ./apps/web/your-app-name
```

#### Create Nuxt app:

```sh
pnpm dlx nuxi init ./apps/web/nuxt-test
```

#### Create NestJS app:

```sh
pnpm dlx @nestjs/cli new ./apps/api/nest-test
```

---

## 🛠️ Useful Commands

- **Install dependencies:**  
  `pnpm install`

- **Run all apps:**  
  `pnpm run dev` (if configured in root `package.json`)

- **Add a new package:**  
  `pnpm create <template> ./packages/<package-name>`

---

## 📁 Project Structure

```
apps/
  web/         # Frontend apps (e.g., Next.js)
  api/         # Backend apps (e.g., Hono)
packages/      # Shared packages/libraries
```

---

## 💡 Tips

- Use relative paths (e.g., `./apps/web/your-app-name`) when creating new projects.
- Manage all dependencies with `pnpm` for workspace consistency.

