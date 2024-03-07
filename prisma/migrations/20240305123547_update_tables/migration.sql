/*
  Warnings:

  - You are about to drop the `visitante` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `visitante`;

-- CreateTable
CREATE TABLE `Visitantes` (
    `visitante_id` INTEGER NOT NULL AUTO_INCREMENT,
    `visitante_nome` VARCHAR(100) NOT NULL,
    `visitante_genero` VARCHAR(20) NOT NULL,
    `visitante_profissao` VARCHAR(50) NOT NULL,
    `visitante_cidade` VARCHAR(20) NOT NULL,
    `visitante_bairro` VARCHAR(20) NOT NULL,
    `visitante_cpf` VARCHAR(20) NOT NULL,
    `visitante_idade` INTEGER NOT NULL,
    `visitante_data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`visitante_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
