/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable("lista", (table) => {
        table.increments("id").primary().unique(); 
        table.string("nome").notNullable(); 
        table
            .integer("quadro_id") 
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("quadro")
            .onDelete("CASCADE") 
            .onUpdate("CASCADE"); 
        table.timestamp("criado_em").defaultTo(knex.fn.now()); 
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return knex.schema.dropTable("lista");
}
