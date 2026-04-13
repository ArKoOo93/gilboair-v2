
import express from 'express'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const dataDir = process.env.DATA_DIR || path.join(root, 'data')
const submissionsFile = path.join(dataDir, 'submissions.json')

fs.mkdirSync(dataDir, { recursive: true })
if (!fs.existsSync(submissionsFile)) {
  fs.writeFileSync(submissionsFile, '[]', 'utf8')
}

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static(distDir))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', (req, res) => {
  const { name, phone, email = '', message } = req.body || {}

  if (!name || !phone || !message) {
    return res.status(400).json({ message: 'נא למלא שם, טלפון והודעה.' })
  }

  const entry = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    name: String(name).trim(),
    phone: String(phone).trim(),
    email: String(email).trim(),
    message: String(message).trim()
  }

  const all = JSON.parse(fs.readFileSync(submissionsFile, 'utf8'))
  all.unshift(entry)
  fs.writeFileSync(submissionsFile, JSON.stringify(all, null, 2), 'utf8')

  return res.json({ ok: true })
})

app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
