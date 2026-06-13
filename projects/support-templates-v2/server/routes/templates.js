import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/', async (req, res, next) => {
  try {
    const { search, category, tags, tagLogic = 'AND' } = req.query
    const where = {}

    if (category) {
      where.category = category
    }

    if (tags) {
      const tagList = tags.split(',').filter(Boolean)
      where.tags = tagLogic === 'OR'
        ? { hasSome: tagList }
        : { hasEvery: tagList }
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { body: { contains: search, mode: 'insensitive' } },
        { tags: { hasSome: [search] } },
      ]
    }

    const templates = await prisma.template.findMany({
      where,
      orderBy: { createdAt: 'asc' },
    })

    res.json(templates)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const template = await prisma.template.findUnique({
      where: { id: req.params.id },
    })
    if (!template) return res.status(404).json({ error: 'Not found' })
    res.json(template)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { id, title, category, tags, body, notes } = req.body
    const template = await prisma.template.create({
      data: { id, title, category, tags: tags ?? [], body, notes: notes ?? null },
    })
    res.status(201).json(template)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { title, category, tags, body, notes } = req.body
    const template = await prisma.template.update({
      where: { id: req.params.id },
      data: { title, category, tags, body, notes: notes ?? null },
    })
    res.json(template)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await prisma.template.delete({ where: { id: req.params.id } })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

export default router
