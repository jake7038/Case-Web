/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable("task", (table) => {
        table.increments("id").primary().unique(); 
        table.string("nome").notNullable(); 
        table.text("descricao").nullable(); 
        table.date("data").nullable(); 
        table.string("etapa1").nullable(); 
        table.string("etapa2").nullable(); 
        table.string("etapa3").nullable(); 
        table
            .integer("lista_id") 
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("lista")
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
    return knex.schema.dropTable("task");
}