import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

function projectsPortalPlugin(): Plugin {
  const getProjects = (rootDir: string) => {
    const projectsDir = path.resolve(rootDir, 'projects')
    if (!fs.existsSync(projectsDir)) return []
    const entries = fs.readdirSync(projectsDir, { withFileTypes: true })
    const items: Array<{ title: string; desc: string; url: string; file: string }> = []

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.html')) {
        const full = path.join(projectsDir, entry.name)
        const html = fs.readFileSync(full, 'utf8')
        const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim() || entry.name.replace(/\.html$/, '')
        const desc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)?.[1]?.trim() || ''
        items.push({ title, desc, url: `projects/${entry.name}`, file: entry.name })
      } else if (entry.isDirectory()) {
        const idx = path.join(projectsDir, entry.name, 'index.html')
        if (fs.existsSync(idx)) {
          const html = fs.readFileSync(idx, 'utf8')
          const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim() || entry.name
          const desc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)?.[1]?.trim() || ''
          items.push({ title, desc, url: `projects/${entry.name}/index.html`, file: `${entry.name}/index.html` })
        }
      }
    }
    return items
  }

  let configRoot = process.cwd()

  return {
    name: 'vite-plugin-projects-portal',
    configResolved(config) {
      configRoot = config.root
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/projects-list' || req.url?.endsWith('/api/projects-list')) {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(getProjects(configRoot)))
          return
        }
        next()
      })
    },
    buildStart() {
      const items = getProjects(configRoot)
      const outDir = path.resolve(configRoot, 'public')
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
      fs.writeFileSync(path.resolve(outDir, 'projects-list.json'), JSON.stringify(items, null, 2))
    },
    closeBundle() {
      // Copy projects directory to dist/projects for static deployment
      const srcProjects = path.resolve(configRoot, 'projects')
      const distProjects = path.resolve(configRoot, 'dist', 'projects')
      if (fs.existsSync(srcProjects)) {
        fs.cpSync(srcProjects, distProjects, { recursive: true })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), projectsPortalPlugin()],
  base: '/NAREKA/',
  server: {
    port: parseInt(process.env.PORT || '5175'),
    strictPort: true,
  },
})
