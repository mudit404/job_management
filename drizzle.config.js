/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_1WbqzTBKAUY9@ep-weathered-mode-a8e0209d-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    },
};
