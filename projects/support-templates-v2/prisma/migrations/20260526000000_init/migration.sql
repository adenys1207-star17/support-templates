-- CreateTable
CREATE TABLE "Template" (
    "id"        TEXT         NOT NULL,
    "title"     TEXT         NOT NULL,
    "category"  TEXT         NOT NULL,
    "tags"      TEXT[]       NOT NULL,
    "body"      TEXT         NOT NULL,
    "notes"     TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);
