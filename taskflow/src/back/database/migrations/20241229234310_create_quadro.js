/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable("quadro", (table) => {
        table.increments("id").primary().unique(); 
        table.string("nome").notNullable(); 
        table.text("descricao").nullable(); 
        table
            .integer("usuario_id") 
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("usuario")
            .onDelete("CASCADE") 
            .onUpdate("CASCADE");
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return knex.schema.dropTable("quadro");
}