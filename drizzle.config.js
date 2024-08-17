/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-cga_db_owner:GAKqQia9RO5D@ep-solitary-math-a27suwld.eu-central-1.aws.neon.tech/ai-cga_db?sslmode=require",
  },
};
