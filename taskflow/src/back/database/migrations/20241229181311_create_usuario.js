/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable("usuario", (table)=> {
        table.increments("id").primary().unique();
        table.string("nome").notNullable();
        table.string("email").notNullable();
        table.string("senha").notNullable();
        table.string("foto").nullable();

    })
    
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return knex.schema.dropTable("usuario");
}