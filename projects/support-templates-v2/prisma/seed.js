import { PrismaClient } from '@prisma/client'
import { templates } from '../src/data/templates/index.js'

const prisma = new PrismaClient()

async function main() {
  console.log(`Seeding ${templates.length} templates...`)

  await prisma.template.deleteMany()

  await prisma.template.createMany({
    data: templates.map(({ id, title, category, tags, body, notes }) => ({
      id,
      title,
      category,
      tags,
      body,
      notes: notes ?? null,
    })),
  })

  console.log('Done.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
